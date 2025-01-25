CREATE TABLE Tutors(
    tutor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    paid INT,
    subjects TEXT,
    vouched INT
);
--@block
CREATE TABLE Students(
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    subjects TEXT,
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES Tutors(tutor_id)
);
--@block
INSERT INTO Tutors (name, paid, subjects, email)
VALUES (
        'Rodrigo',
        1,
        'algebra1,geometry,algebra2,calcab',
        'test@gmail.com'
    );
--@block
SELECT *
FROM Tutors;
--@block
UPDATE Tutors
SET vouched = 0 --@block
ALTER TABLE Tutors DROP COLUMN email;
--@block
DESC Tutors