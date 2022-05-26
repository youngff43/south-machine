// requirements
const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const allCards = require('./src/page-template.js');
const { generateManagerCard, generateEngineerCard, generateInternCard } = require("./src/card-template");

//first questions generated on manager 
const questions = [
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
        type: 'loop',
        name: 'addSomeone',
        message: 'Do you want to add any more employees? If no, your team will be created.',
        questions: [
            {
            type: 'list',
            name: 'menuOne',
            message: 'Choose an option below.',
            choices: ['Add an Engineer', 'Add an Intern'],
            default: "I'm done building the team",
            },
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
            when: (answers) => answers.menuOne === 'Add an Engineer'
            },
            {
            type: 'number',
            name: 'id',
            message: 'What is the Engineers ID number?',
            validate: answer => isNaN(parseInt(answer)) ? 'Please enter in a valid engineers ID' : true,
            filter: answer => isNaN(parseInt(answer)) ? "" : parseInt(answer),
            when: (answers) => answers.menuOne === 'Add an Engineer'
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
            when: (answers) => answers.menuOne === 'Add an Engineer'
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
            when: (answers) => answers.menuOne === 'Add an Engineer'
            },
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
            when: (answers) => answers.menuOne === 'Add an Intern'
            },
            {
            type: 'number',
            name: 'id',
            message: 'What is the Interns ID number?',
            validate: answer => isNaN(parseInt(answer)) ? 'Please enter in a valid intern ID' : true,
            filter: answer => isNaN(parseInt(answer)) ? "" : parseInt(answer),
            when: (answers) => answers.menuOne === 'Add an Intern'
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
            when: (answers) => answers.menuOne === 'Add an Intern'
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
            when: (employee) => employee.menuOne === 'Add an Intern'
            },]}]

inquirer.prompt(questions)
.then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    const employees = answers.addSomeone 
    const engineers = []
    const interns = []

    
    for(let i = 0; i < employees.length; i++) {
        const e = employees[i]
        if (e.menuOne === "Add an Engineer") {
            const engineer = new Engineer(e.name, e.id, e.email, e.github)
            engineers.push(engineer)
        } else if (e.menuOne === "Add an Intern") {
            const intern = new Intern(e.name, e.id, e.email, e.school)
            interns.push(intern)
        }
    }

    const managerCards = generateManagerCard(manager)
    const enginnerCards = generateEngineerCard(engineers)
    const internCards = generateInternCard(interns)
    const generatePage = allCards(managerCards, enginnerCards, internCards)
    
// function to write the team file 
    const fileName = ("./dist/index.html");
    console.log("Your team page has been generated!");
    fs.writeFileSync(fileName, generatePage, function(err) {
    if (err) {
        console.log(err);
    } else {
        return true
    }
})})