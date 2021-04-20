DROP DATABASE employee_trackerDB;

CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM role;

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL NULL,
    departmentID INT,
    FOREIGN KEY(departmentID) REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    roleID INT,
    managerID INT,
    FOREIGN KEY(roleID) REFERENCES role(id),
    FOREIGN KEY(managerID) REFERENCES employee(id),
    PRIMARY KEY(id)
);

INSERT INTO role (title, salary, departmentID) 
VALUES 
('Sales Lead', 100000, 1),
('Salesperson', 80000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 4),
('Accountant', 125000, 5),
('Legal Team Lead', 250000, 6),
('Lawyer', 190000, 7),
('Lead Engineer', 150000, 8);
SELECT * FROM role;

INSERT INTO employee (first_name, last_name, roleID, managerID)
VALUES
('Ashley', 'Rodriguez', 3, null),
('John', 'Doe', 1, 1),
('Mike', 'Chan', 2, 2),
('Kevin', 'Tupik', 4, 1),
('Malia', 'Brown', 5, null),
('Sarah', 'Lourd', 6, null),
('Tom', 'Allen', 7, 6),
('Christian', 'Eckenrode', 8, 3);
SELECT * FROM employee;