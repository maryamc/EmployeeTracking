const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
    user: "root",

    password: "password",
    database: "employeetracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId)
    // connection.end();
    start();
});

// Adding departments, roles, employees
function start() {
    inquirer.prompt({
        name: "Welcome",
        type: "list",
        message: "Hello! Welcome to the employee tracking application, what would you like to do?",
        choices: ["View All Employees", "View All Roles", "View Departments", "Add An Employee", "Add A Role", "Add A Department", "Update Employee Role"]


    }).then(function (answer) {
        if (answer.Welcome === "View All Employees") {
            viewEmployees();
        } else if (answer.Welcome === "Add An Empolyee") {
            addEmployee();
        } else if (answer.Welcome === "View Departments") {
            viewDepartments();
        } else if (answer.Welcome === "View All Roles") {
            viewRoles();
        } else if (answer.Welcome === "Add A Department") {
            addDepartment();
        } else if (answer.Welcome === "Add A Role") {
            addRole();
        } else if (answer.Welcome === "Update Employee Role") {
            //update role function
        } else {
            connection.end();
        }
    })
}

//function for viewing employees 
function viewEmployees() {
    connection.query(`SELECT employee.first_name,employee.last_name, role.title, role.salary FROM employee INNER JOIN role ON employee.role_id=role.id;`, function (err, results) {
        if (err) throw err;
        console.table(results)
        start();
    })

};

// function for viewing departments
function viewDepartments() {
    connection.query('SELECT * FROM department', function (err, results) {
        if (err) throw err;
        console.table(results)
        start();
    })
}

//function for viewing roles
function viewRoles() {
    connection.query('SELECT * FROM role', function (err, results) {
        if (err) throw err;
        console.table(results)
        start();
    })
}

//function for addding employee
// for some reason the command line freezes on my VS code when trying to run this option? still not fixed not sure whats wrong
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first",
            message: "Enter employees first name"
        },
        {
            type: "input",
            name: "last",
            message: "Enter employees last name"
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter employees role id"
        }
    ]).then(function (answer) {
        connection.query(`INSERT INTO employee (first_name, last_name, role_id) 
        VALUES ('${answer.first}', '${answer.last}', '${answer.role_id}')`, function (err, results) {
            if (err) throw err;
            console.log("Successfully added " + answer.first + " " + answer.last + "!")
            start();
        });
    })
};

//function for adding roles
function addRole(){
    inquirer.prompt([
        {
            type:"input",
            name:"title",
            message: "What is the role title?"
        },
        {
            type:"input",
            name:"salary",
            message: "What is the annual salary?"
        },
        {
            type:"input",
            name:"department_id",
            message: "What is the department id?"
        }
    ]).then(function(answer){
        connection.query(`INSERT INTO role (title, salary, department_id)
        VALUES ('${answer.title}', '${answer.salary}','${answer.department_id}')`, function (err, results) {
            if (err) throw err;
            console.log("Successfully added " + answer.title + " as a new role!");
            start();
        });
    })
}

// function for adding departments
function addDepartment(){
    inquirer.prompt([
        {
            type:"input",
            name: "name",
            message: "Enter department name you wish to add"
        }
    ]).then(function (answer){
        connection.query(`INSERT INTO department (name)
        VALUES ('${answer.name}')`, function (err, results){
            if (err) throw err;
            console.log("Successfully added " + answer.name + " as a new department!")
            start();
        });
    })
}

// Updating employee roles

