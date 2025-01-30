require('dotenv').config(); // Load environment variables
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'Universitydb1',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Fetch all UBPM data (departments, programs, minors)
app.get('/api/ubpm', async (req, res, next) => {
    try {
        const [rows] = await pool.query('SELECT * FROM UBPM');
        res.json(rows);
    } catch (err) {
        next(err);
    }
});

// Fetch subjects based on UBPM_ID and semester
app.get('/api/subjects/:ubpm_id/:semester', async (req, res, next) => {
    try {
        const { ubpm_id, semester } = req.params;
        const [rows] = await pool.query(
            'SELECT subject_name, subject_cred FROM Subjects WHERE UBPM_ID = ? AND semester = ?',
            [ubpm_id, semester]
        );
        res.json(rows);
    } catch (err) {
        next(err);
    }
});

// Fetch optional subjects
app.get('/api/opt-subjects', async (req, res, next) => {
    try {
        const [rows] = await pool.query('SELECT * FROM OptionalSubjects');
        res.json(rows);
    } catch (err) {
        next(err);
    }
});

// Grade to CGPA Mapping
const gradePointsMap = {
    "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5, "F": 0
};

// Calculate CGPA
app.post('/api/cgpa', (req, res, next) => {
    try {
        const grades = req.body.grades; // Array of {grade, subject_cred}
        if (!grades || !Array.isArray(grades)) {
            return res.status(400).json({ error: 'Invalid input format' });
        }

        let totalPoints = 0, totalCredits = 0;
        for (const { grade, subject_cred } of grades) {
            if (!gradePointsMap.hasOwnProperty(grade.toUpperCase())) {
                return res.status(400).json({ error: `Invalid grade: ${grade}` });
            }
            const gradePoints = gradePointsMap[grade.toUpperCase()];
            totalPoints += gradePoints * subject_cred;
            totalCredits += subject_cred;
        }

        const cgpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
        res.json({ cgpa });
    } catch (err) {
        next(err);
    }
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
