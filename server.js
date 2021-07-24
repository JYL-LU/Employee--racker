const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");


function startQuest() {
    inquirer.prompt({

    type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: [
              "View all departments?", 
              "View all roles?",
              "View all employees",
              "Add department?",
              "Add role?",
              "Add employee?",
              "Update employee role",
              "Exit"
            ]
        }).then(function(response){
            switch(response.options){
                case "View all departments?":
                viewAllDepartments();
                break;
            }
        };


    function viewAllDepartments(){
        
    }