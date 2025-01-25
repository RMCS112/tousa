--@block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);
--@block
INSERT INTO Users (email, bio, country)
VALUES (
        'example@gmail.com',
        'I am very cool',
        'BR'
    );
--@block
SELECT id,
    email
FROM Users
WHERE email != ''
    OR id = 1
    AND email LIKE '%.com'
ORDER BY id ASC
LIMIT 2;
--@block
CREATE INDEX email_index ON Users(email);
--@block
CREATE TABLE Students(
    student_id INT AUTO_INCREMENT,
    name VARCHAR(20),
    email VARCHAR(255),
    tutor_id INT,
    PRIMARY KEY (student_id),
    FOREIGN KEY (tutor_id) REFERENCES Users(id)
);
--@block
INSERT INTO Students (tutor_id, name)
VALUES (1, 'Rod'),
    (1, 'DAVA'),
    (1, 'DUMMY'),
    (1, 'somEone') --@block
SELECT *
FROM Users
    INNER JOIN Students ON Students.tutor_id = Users.id --@block
    DROP TABLE students