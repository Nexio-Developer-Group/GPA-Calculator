-- 1️⃣ Table for UBPM (University Branch Program Minor)
CREATE TABLE UBPM (
    UBPM_ID INT AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(100) NOT NULL,
    program VARCHAR(100) NOT NULL,
    minor VARCHAR(100) DEFAULT NULL
);

-- 2️⃣ Table for Subjects (Regular subjects for each department and semester)
CREATE TABLE Subjects (
    subject_id INT AUTO_INCREMENT PRIMARY KEY,
    UBPM_ID INT,
    semester INT NOT NULL CHECK (semester BETWEEN 1 AND 8),
    subject_name VARCHAR(255) NOT NULL,
    subject_cred INT NOT NULL CHECK (subject_cred > 0),
    FOREIGN KEY (UBPM_ID) REFERENCES UBPM(UBPM_ID) ON DELETE CASCADE
);

-- 3️⃣ Table for Optional Subjects
CREATE TABLE OptionalSubjects (
    opt_subject_id INT AUTO_INCREMENT PRIMARY KEY,
    subject_name VARCHAR(255) NOT NULL,
    subject_cred INT NOT NULL CHECK (subject_cred > 0)
);
