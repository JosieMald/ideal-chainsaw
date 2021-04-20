const inquirer = require('inquirer');
const { createConnection } = require('net');
const path = require('path');

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