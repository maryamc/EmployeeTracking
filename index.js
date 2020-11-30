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
        choices: ["View All Employees", "View All Roles", "View Departments","Add An Employee","Add A Role", "Add A Department", "Update Employee Role"]


    }).then(function (answer) {
        if (answer.Welcome === "View All Employees") {
            viewEmployees();
        } else if (answer.Welcome === "Add An Empolyee") {
            // addEmployee();
        } else if (answer.Welcome === "View Departments"){
            viewDepartments();
        } else if (answer.Welcome === "View All Roles") {
            viewRoles();
        } else if (answer.Welcome === "Add A Department"){
            //department adding function
        } else if (answer.Welcome === "Add A Role"){
            // role adding function
        } else {
            //update role function
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
function viewDepartments(){
    connection.query('SELECT * FROM department', function (err, results){
        if(err) throw err;
        console.table(results)
        start();
    })
}

//function for viewing roles
function viewRoles (){
    connection.query('SELECT * FROM role', function (err, results){
        if (err) throw err;
        console.table(results)
        start();
    })
}

// function addEmployee(){
//     connection.query(`INSERT INTO employee (first_name, last_name, role_id) 
//     VALUES ('Leeroy','Jenkins',1)`, function(err){
//         if(err) throw err;
//         start();
//     });
//     // inquirer.prompt above connection.query 
// };



// Updating employee roles

