const inquirer = require("inquirer");
const path = require("path");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "Angie2212",
  database: "employee_trackerDB",
});

connection.connect((err) => {
  console.log("Hello World");
  if (err) throw err;
  runApp();
});

const runApp = () => {
  inquirer
    .prompt(
      {
        type: "list",
        name: "userInput",
        message: "What would you like to do?",
        choices: [
          "View all Employees",
          "View all Employees By Department",
          "View all Employees By Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "View All Roles",
          "Remove A Role",
          "EXIT",
        ],
      })
    .then((answer) => {
      switch (answer.userInput) {
        case "View all Employees":
          viewEmployees();
          break;
        case "View all Employees By Department":
          empDepartment();
          break;
        case "View all Employees By Manager":
          empManager();
          break;
        case "Add Employee":
          addEmp();
          break;
        case "Remove Employee":
          removeEmp();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "Update Employee Manager":
          updateManager();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "Remove A Role":
          removeRole();
          break;
        case "Exit":
          connection.end();
          break;
        default:
          console.log(`Invalid response: ${answer.userInput}`);
          break;
      }
    });
}

const viewEmployees = () => {
  const sql =
    "SELECT employee.id, CONCAT(employee.first_name, ' ', employee.last_name)Employees, CONCAT(role.title)Title, CONCAT(department.name)Department,";
    sql += 
    "CONCAT(manager.first_name, ' ', manager.last_name)Managers FROM employee LEFT JOIN role ON employee.roleID = role.id LEFT JOIN department ON";
    sql += 
    'role.departmentID = department.id LEFT JOIN employee manager ON employee.id = manager.managerID';
console.log(' ');  
    connection.query(sql, '', (err, res) => {
      if (err) throw err;
      console.table(res);
    runApp();
  });
};

const addEmp = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "role",
        meesage: "What is the employee's role?",
        choices: [
          "Sales Lead",
          "Salesperson",
          "Lead Engineer",
          "Software Engineer",
          "Account Manager",
          "Accountant",
          "Legal Team Lead"
        ]
      },
      {
        type: "list",
        name: "manager",
        meesage: "Who is the employee's manager?",
        choices: ["Ashley Rodriguez", "John Doe", "Mike Chan", "Sarah Lourd"],
      }])
    .then((answer) => {
      const sql =
        "INSERT INTO employee(first_name, last_name, roleID, managerID ) VALUES (?,?,?,?)";
      connection.query(sql,
        [answer.firstName, answer.lastName, answer.role, answer.manager],
        (err, res) => {
          if (err) throw err;
          console.log(res);
          console.log("Employee as been added!");
          runApp();
        }
      );
    });
};
