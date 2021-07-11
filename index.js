
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
        name: "managerID",
        type: "input",
        message: "Enter your manager's ID",
    },

    {
        name: "managerEmail",
        type: "input",
        message: "What is your manager's e-mail address?",
    },

    {
        name: "managerContactNumber",
        type: "input",
        message: "What is your manager's contact number?",
    },
    {
        name: "additionalTeamMember",
        type: "list",
        message: "Select team members to add",
        choices: ["Engineer", "Intern"],
    },
])
.then(answers => {
    let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerContactNumber)
    teamMembers.push(manager);
    if(answers.additionalTeamMember === "Engineer")
    {
        addEngineer();
    }else if (answers.additionalTeamMember === "Intern")
    {
        addIntern();
    }else
    {
        generateHTML();
    }
    
    //evaluateAdditionalTeamMemberResult(answers.additionalTeamMember);
})   
.catch(error => {
    if (error.isTtyError) {
    } else {

    }
}),

function addEngineer()
{
    inquirer
    .prompt([
        {
            name: "engineerName",
            type: "input",
            message: "Enter your engineer's name", 
        },
    
        {
            name: "engineerID",
            type: "input",
            message: "Enter your engineer's ID",
        },
    
        {
            name: "engineerEmail",
            type: "input",
            message: "What is your engineer's e-mail address?",
        },
    
        {
            name: "engineerGitHub",
            type: "input",
            message: "What is your engineer's GitHub account?",
        },
        {
            name: "additionalTeamMember",
            type: "list",
            message: "Select team members to add",
            choices: ["Engineer", "Intern", "Exit"]
        },
    ])
    .then(answers => {
        let engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
        teamMembers.push(engineer);
        if (answers.additionalTeamMember === "Engineer")
        {
            addEngineer ();
        }else if (answers.additionalTeamMember === "Intern")
        {
            addIntern();
        }else
        {
            generateHTML();
        }
    
    })
    .catch(error => {
        if (error.isTtyError) {
        } else {
    
        }
    });
}

function addIntern()
{
    inquirer
    .prompt([
        {
            name: "internName",
            type: "input",
            message: "Enter your intern's name", 
        },
    
        {
            name: "internID",
            type: "input",
            message: "Enter your intern's ID",
        },
    
        {
            name: "internEmail",
            type: "input",
            message: "What is your intern's e-mail address?",
        },
    
        {
            name: "internSchool",
            type: "input",
            message: "What is your intern's school?",
        },
        {
            name: "additionalTeamMember",
            type: "list",
            message: "Select team members to add",
            choices: ["Engineer", "Intern", "Exit"]
        },
    ])
    .then(answers => {
        let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool );
        teamMembers.push(intern);
        evaluateAdditionalTeamMemberResult(answers.additionalTeamMember);
    
    })
    .catch(error => {
        if (error.isTtyError) {
        } else {
    
        }
    });
}

function evaluateAdditionalTeamMemberResult(result)
{
    if (result === "Engineer")
        {
            addEngineer ();
        }else if (result === "Intern")
        {
            addIntern();
        }else
        {
            generateHTML();
        }
}

function generateHTML ()
{
    fs.writeFileSync(generatedHtmlFilePath, "");
}



