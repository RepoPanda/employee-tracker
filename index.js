// requires
const mysql = require('mysql');
const inquirer = require('inquirer');

// create connection to mysql database
const connection = mysql.createConnection({
    host: 'localhost127.0.0.1',
    port: 3306,
    user: 'user1234',
    password: 'pw1234',
    database: 'employee_db'
});

// connect to mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id  ${connection.threadId}`);
    start();
});

// function which prompts the user for what action they should take.
const start = () => {
    console.log('WELCOME TO THE EMPLOYEE MANAGER!');
    initialPrompt();
};

// initial prompt
const initialPrompt = () => {
    inquirer.prompt({
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'
        ]
    }).then((answer) => {
        switch (answer.choices) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Quit':
                connection.end();
                break;
        }
    });
};

