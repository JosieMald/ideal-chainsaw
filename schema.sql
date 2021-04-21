DROP DATABASE employee_trackerDB;

CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

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

INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');
SELECT * FROM department;

INSERT INTO role (title, salary, departmentID) 
VALUES 
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4),
('Lead Engineer', 150000, 2);
SELECT * FROM role;

INSERT INTO employee (first_name, last_name, roleID)
VALUES
('Ashley', 'Rodriguez', 3),
('Malia', 'Brown', 5),
('Sarah', 'Lourd', 6);

INSERT INTO employee (first_name, last_name, roleID, managerID)
VALUES
('John', 'Doe', 1, 1),
('Mike', 'Chan', 2, 4),
('Kevin', 'Tupik', 4, 1),
('Tom', 'Allen', 7, 3),
('Christian', 'Eckenrode', 8, 5);
SELECT * FROM employee;

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- SELECT e.id, e.first_name, e.last_name, role.title, department.name
-- FROM department d
-- RIGHT JOIN employee ON e.roleID = roleID
-- LEFT JOIN department ON role.departmentID = departmentID