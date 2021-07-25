const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_db",
});

//connect my connection to mysql database

connection.connect(function (err) {
  if (err) throw err;
  startQuest();
});

function startQuest() {
  inquirer
    .prompt({
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "View all departments?",
        "View all roles?",
        "View all employees?",
        "Add department?",
        "Add role?",
        "Add employee?",
        "Update employee role?",
        "Exit",
      ],
    })
    .then(function (response) {
      switch (response.options) {
        case "View all departments?":
          viewAllDepartments();
          break;

        case "View all roles?":
          viewAllRoles();
          break;
        case "View all employees?":
          viewAllEmployees();
          break;
        case "Add department?":
          addDepartment();
          break;
        case "Add role?":
          addRole();
          break;
        case "Add employee?":
          addEmployee();
          break;
        case "Update employee role?":
          updateEmployee();
          break;
        default:
          connection.end();
      }
    });
}

function viewAllDepartments() {
  connection.query("SELECT * FROM departments", function (err, res) {
    if (err) throw err;
    console.table(res);
    startQuest();
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    console.table(res);
    startQuest();
  });
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    console.table(res);
    startQuest();
  });
}

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "questions",
      message: "Which is the name of the department you would like to add?",
    })
    .then(function (response) {
      connection.query(
        "INSERT INTO departments SET ?",
        {
          name: response.questions,
        },
        function (err) {
          if (err) throw err;
          startQuest();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the roll you would like to add?",
      },

      { type: "input", name: "salary", message: "What is the salary?" },

      {
        type: "input",
        name: "department_id",
        message: "What is the department_id for this roll?",
      },
    ])

    .then(function (response) {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: response.title,
          salary: response.salary,
          department_id: response.department_id,
        },
        function (err) {
          if (err) throw err;
          startQuest();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",
      },

      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?",
      },

      {
        type: "input",
        name: "role_id",
        message: "What is the eomployee's role_id?",
      },
    ])

    .then(function (response) {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: response.first_name,
          last_name: response.last_name,
          role_id: response.role_id,
        },
        function (err) {
          if (err) throw err;
          startQuest();
        }
      );
    });
}

function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employee_id",
        message: "Please enter the employee's id",
      },

      {
        type: "input",
        name: "update_id",
        message: "Please enter the new roll_id for the employee",
      },
    ])

    .then(function (response) {
      connection.query(
        "UPDATE employees SET role_id = ? WHERE id = ?",
        [response.employee_id, response.update_id],
        function (err) {
          if (err) throw err;
          startQuest();
        }
      );
    });
}
