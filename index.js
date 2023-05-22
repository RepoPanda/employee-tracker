// requires
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

// create connection to mysql database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
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
        console.log(answer.choices);
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
    }).catch((err)=>{
        if(err)throw err;
    });
};

// view all employees
const viewAllEmployees = () => {
    console.log('Viewing all employees...\n');
    let query = 
    `SELECT
        employee.id,
        employee.first_name,
        employee.last_name,
        role.title,
        department.name AS department,
        role.salary,
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN role 
        ON employee.role_id = role.id
    LEFT JOIN department
        ON department.id = role.department_id
    LEFT JOIN employee manager
        ON manager.id = employee.manager_id`
        
    connection.query(query, (err, res) => {
        if (err) throw err;

        console.table(res);
        console.log("Employees viewed!\n");
        
        initialPrompt();
    });
};

// add employee
const addEmployee = () => {
    console.log('Adding an employee...\n');
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the employee\'s first name?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the employee\'s last name?'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the employee\'s role ID?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the employee\'s manager ID?'
        }
    ])
    .then((answer) => {
        let query = 
        `INSERT INTO employee SET ?`
        connection.query(query,{
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleId,
            manager_id: answer.managerId
        }, (err, res) => {
            if (err) throw err;
            console.log('Employee added!\n');
            initialPrompt();
        });

    });
};

// update employee role
const updateEmployeeRole = () => {};

// view all roles
const viewAllRoles = () => {};

// add role
const addRole = () => {};

// view all departments
const viewAllDepartments = () => {};

// add department
const addDepartment = () => {};

// quit
const quit = () => {};