// requirements
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const util = require("util");
const validator = require("email-validator");
//const { createInterface } = require("readline");
const staffInformation = [];
const generatePage = require('./src/page-template.js');

//first questions generated on manager 
const questions = async () => {
    const managerQuestions = await inquirer
    .prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the team Managers name?',
        validate(answer) {
            if(!answer) {
                return "Please, fill your name!"
            }
            return true
        }
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the team Managers employee ID number?',
        validate: answer => isNaN(parseInt(answer)) ? 'Please enter in a valid employee ID' : true,
        filter: answer => isNaN(parseInt(answer)) ? "" : parseInt(answer),
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the team Managers email address?',
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (!valid) {
                return "Please enter in a valid email"
            }
            return true   
        }
        },
        {
        type: 'number',
        name: 'officeNumber',
        message: 'What is the team Managers office number?',
        validate: answer => isNaN(parseInt(answer)) ? 'Please enter in a valid office number' : true,
        filter: answer => isNaN(parseInt(answer)) ? "" : parseInt(answer),
        },
        {
        type: 'list',
        name: 'menuOne',
        message: 'Choose an option below.',
        choices: ['Add an Engineer', 'Add an Intern', "I'm done building the team."],
        default: "I'm done building the team",
        },])


    const manager = new Manager(
        managerQuestions.name,
        managerQuestions.id,
        managerQuestions.email,
        managerQuestions.officeNumber
    );
    staffInformation.push(manager);

    // if 'add a engineer' is chosen prompt these questions
    if (managerQuestions.menuOne === 'Add an Engineer') {
    const engineerQuestions = await inquirer
    .prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the Engineers name?',
        validate(answer) {
            if(!answer) {
                return "Please, fill the Engineers name!"
            }
            return true
        },
        },
        {
        type: 'number',
        name: 'id',
        message: 'What is the Engineers ID number?',
        validate: answer => isNaN(parseInt(answer)) ? 'Please enter in a valid engineers ID' : true,
        filter: answer => isNaN(parseInt(answer)) ? "" : parseInt(answer),
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the Engineers email address?',
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (!valid) {
                return "Please enter in a valid email"
            }
            return true 
        },
        },
        {
        type: 'input',
        name: 'github',
        message: 'What is the Engineers GitHub username?',
        validate(answer) {
            if(!answer) {
                return "Please, fill the engineers Github username!"
            }
            return true
        },
        },])

    const engineer = new Engineer(
        engineerQuestions.name,
        engineerQuestions.id,
        engineerQuestions.email,
        engineerQuestions.github
    );
    staffInformation.push(engineer);
    
    } else if (managerQuestions.menuOne === 'Add an Intern') {
        const internQuestions = await inquirer
        .prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the Interns name?',
        validate(answer) {
            if(!answer) {
                return "Please, fill the interns name!"
            }
            return true
        },
        },
        {
        type: 'number',
        name: 'id',
        message: 'What is the Interns ID number?',
        validate: answer => isNaN(parseInt(answer)) ? 'Please enter in a valid intern ID' : true,
        filter: answer => isNaN(parseInt(answer)) ? "" : parseInt(answer),
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the Interns email address?',
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (!valid) {
                return "Please enter in a valid email"
            }
            return true
            
        },
        },
        {
        type: 'input',
        name: 'school',
        message: 'What school does the Intern attend?',
        validate(answer) {
            if(!answer) {
                return "Please, fill the interns school!"
            }
            return true;
        },
        },])

    const intern = new Intern(
        internQuestions.name,
        internQuestions.id,
        internQuestions.email,
        internQuestions.school
    );
    staffInformation.push(intern);

    } else
        return createNewStaffMember();
};

async function promptQuestions() {
    await questions()
    return createNewStaffMember();
}

promptQuestions();

// function to write the team file 
function createNewStaffMember() {
    const fileName = ".dist/index.html"
    console.log(staffInformation)
    fs.writeFileSync(fileName, generatePage(staffInformation), (err) =>
    err ? console.log(err) : console.log("Your team has been created!")
    );
};

// inquirer
//     .prompt(questions)
//     .then((answers) => {
//       console.log(JSON.stringify(answers, null, 2))
//     })
//     .catch((error) => {
//       if (error.isTtyError) {
//         console.log("Your console environment is not supported!")
//       } else {
//         console.log(error)
//       }
//   })
