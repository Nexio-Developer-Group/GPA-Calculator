const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Universitydb1'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Fetch all UBPM data (departments, programs, minors)
app.get('/api/ubpm', (req, res) => {
    connection.execute('SELECT * FROM UBPM', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching UBPM data', details: err });
        }
        res.json(rows);
    });
});

// Fetch subjects based on UBPM_ID and semester
app.get('/api/subjects/:ubpm_id/:semester', (req, res) => {
    const { ubpm_id, semester } = req.params;
    connection.execute(
        'SELECT subject_name, subject_cred FROM Subjects WHERE UBPM_ID = ? AND semester = ?',
        [ubpm_id, semester],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching subjects', details: err });
            }
            res.json(rows);
        }
    );
});

// Fetch optional subjects
app.get('/api/opt-subjects', (req, res) => {
    connection.execute('SELECT * FROM OptionalSubjects', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching optional subjects', details: err });
        }
        res.json(rows);
    });
});

// Grade to CGPA Mapping
const gradePointsMap = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "F": 0
};

// Calculate CGPA
app.post('/api/cgpa', (req, res) => {
    const grades = req.body.grades; // Array of {grade, subject_cred}
    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach(({ grade, subject_cred }) => {
        const gradePoints = gradePointsMap[grade.toUpperCase()] || 0;
        totalPoints += gradePoints * subject_cred;
        totalCredits += subject_cred;
    });

    const cgpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
    res.json({ cgpa });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
