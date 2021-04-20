const inquirer = require('inquirer');
const { createConnection } = require('net');
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'Angie2212',
    database: 'employee_trackerDB',
  });
  
  connection.connect((err) => {
      console.log('Hello World');
    if (err) throw err;
    runApp();
  });

function runApp() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'userInput',
            message: 'What would you like to do?',
            options: 
            [
                'View all Employees',
                'View all Employees By Department',
                'View all Employees By Manager',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'View All Roles',
                'Remove A Role',
                'EXIT',

            ]
        }
    ]).then(answer => {
        switch(answer.userInput) {
            case 'View all Employees':
                viewEmployees();
                break;
            case 'View all Employees By Department':
                empDepartment();
                break;
            case 'View all Employees By Manager':
                empManager();
                break;
            case 'Add Employee':
                addEmp();
                break;
            case 'Remove Employee':
                removeEmp();
                break;
            case 'Update Employee Role':
                updateRole();
                break;
            case 'Update Employee Manager':
                updateManager();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'Remove A Role':
                removeRole();
                break;
            case 'Exit':
                connection.end();
                break;
            default:
                console.log(`Invalid response: ${answer.userInput}`);
                break;
        }
    });

};

const addEmp = async () => {
    const choices = await employee_trackerDB.getManagers();
    console.log(choices)
    inquirer
    .prompt({
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?"
    },
    {
        type: 'list',
        name: 'role',
        meesage: "What is the employee's role?",
        options: [
            'Sales Lead',
            'Salesperson',
            'Lead Engineer',
            'Software Engineer',
            'Account Manager',
            'Accountant',
            'Legal Team Lead']
    },
    {
        type: 'list',
        name: 'manager',
        meesage: "Who is the employee's manager?",
        choices: choices
    },
    )
}