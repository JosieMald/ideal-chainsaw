DROP DATABASE employee_trackerDB;

CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department(
  id INT NOT NULL,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
    id INT NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL NULL,
    departmentID INT,
    FOREIGN KEY(departmentID) REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee(
    id INT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    roleID INT,
    managerID INT,
    FOREIGN KEY(roleID) REFERENCES role(title),
    FOREIGN KEY(managerID) REFERENCES employee(first_name, last_name),
    PRIMARY KEY(id)
);

SELECT * FROM department;

INSERT INTO role (title, salary) 
VALUES 
('Sales Lead', 100000),
('Salesperson', 80000),
('Lead Engineer', 150000),
('Software Engineer', 120000),
('Accountant', 125000),
('Legal Team Lead', 250000),
('Lawyer', 190000),
('Lead Engineer', 150000);
