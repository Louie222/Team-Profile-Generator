
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern'); 

const inquirer = require("inquirer");
const fs = require("fs");

const generatedHtmlFilePath = './dist/TeamProfile.html'

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

inquirer
.prompt([
    {
        name: "managerName",
        type: "input",
        message: "Enter your team manager's name", 
    },

    {
        name: "employeeID",
        type: "input",
        message: "Enter your employee ID",
    },

    {
        name: "email",
        type: "input",
        message: "What is your e-mail address?",
    },

    {
        name: "contactNumber",
        type: "input",
        message: "What is your best contact number?",
    },
    {
        name: "additionalTeamMember",
        type: "list",
        message: "Select team members to add",
        choices: ["Engineer", "Intern"],
    },
])
.then(answers => {
    fs.writeFileSync(generatedHtmlFilePath, "");

})
.catch(error => {
    if (error.isTtyError) {
    } else {

    }
}),

function additionalTeamMembers()
{
    inquirer
    .prompt([
        {
            name: "managerName",
            type: "input",
            message: "Enter your team manager's name", 
        },
    
        {
            name: "employeeID",
            type: "input",
            message: "Enter your employee ID",
        },
    
        {
            name: "email",
            type: "input",
            message: "What is your e-mail address?",
        },
    
        {
            name: "contactNumber",
            type: "input",
            message: "What is your best contact number?",
        },
        {
            name: "additionalTeamMember",
            type: "list",
            message: "Select team members to add",
            choices: ["Engineer", "Intern"],
        },
    ])
    .then(answers => {
        fs.writeFileSync(generatedHtmlFilePath, "");
    
    })
    .catch(error => {
        if (error.isTtyError) {
        } else {
    
        }
    }),
}



