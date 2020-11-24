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
        message: "Hello! What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Role"]


    }).then(function (answer) {
        if (answer.Welcome === "View All Employees") {
            viewEmployees();
        } else if (answer.Welcome === "Add Emplyee") {
            // addEmployee();
        } else {
            //update role function
        }
    })
}

//viewing employees 
function viewEmployees() {
    connection.query(`SELECT employee.first_name,employee.last_name, role.title, role.salary FROM employee INNER JOIN role ON employee.role_id=role.id;`, function (err, results) {
        if (err) throw err;
        console.table(results)
        start();
    })

};

// function addEmployee(){
//     connection.query(`INSERT INTO employee (first_name, last_name, role_id) 
//     VALUES ('Leeroy','Jenkins',1)`, function(err){
//         if(err) throw err;
//         start();
//     });
//     // inquirer.prompt above connection.query 
// };

// Viewing departments, roles, employees

// Updating employee roles

