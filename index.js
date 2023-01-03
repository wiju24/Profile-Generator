// required node packages
const fs = require('fs');
const inquirer = require('inquirer');
const createHTML = require('./src/generateHTML');

// required library modules 

const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const { start } = require('repl');

// Empty array for responses for questions
const teamMembers = [];

// Function for Starting Menu

const startMenu = () => {
    return inquirer.prompt ({
        type: 'list',
        name:'menu',
        message: 'Choose from the following options to move forward:',
        choices: [
            '1) Proceed to adding Intern',
            '2) Proceed to adding Engineer',
            '3) Proceed to adding Manager',
            '4) Lets get the right team to get it done!!'
        ]
    })

    .then(teamBuilder => {
        while (teamBuilder.menu) {
            if (teamBuilder.menu === '1) Proceed to adding Intern') {
                
                return internInput();

            } else if (teamBuilder.menu === '2) Proceed to adding Engineer'){
               
                return engineerInput();

            } else if (teamBuilder.menu === '3) Proceed to adding Manager'){
                
                return managerInput();

            } else if (teamBuilder.menu === '4) Lets get the right team to get it done!!'){

                // console.log(teamMembers);
                return finishHTML();
            }
        }
    })
}

startMenu()

// Function for Inputting Intern

const internInput = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Enter in the Id that the intern will be using',
            validate: (idNumber) => {  
                if (idNumber) {
                    return true;
                } else {
                    console.log('Id of the intern is required')
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?',
            validate: (nameInt) => {  
                if (nameInt) {
                    return true;
                } else {
                    console.log('Name of the intern is required')
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Intern?',
            validate: (emailInt) => {  
                if (emailInt) {
                    return true;
                } else {
                    console.log('Email of the intern is required')
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school is the intern intending?',
            validate: (schoolInt) => {  
                if (schoolInt) {
                    return true;
                } else {
                    console.log('School of Intern is required!')
                    return false;
                }
            }   
        }
    ])
    .then(recruitInput => {
        teamMembers.push(new Intern (recruitInput.id, recruitInput.name, recruitInput.email, recruitInput.school));
        // console.log(teamMembers);
        return startMenu();
    })
}

// Function for Inputting Engineer

const engineerInput = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Enter in the Id that the Engineer will be using',
            validate: (idEng) => {  
                if (idEng) {
                    return true;
                } else {
                    console.log('Id of the Engineer is required')
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?',
            validate: (nameEng) => {  
                if (nameEng) {
                    return true;
                } else {
                    console.log('Name of the Engineer is required')
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Engineer?',
            validate: (emailEng) => {  
                if (emailEng) {
                    return true;
                } else {
                    console.log('Email of the Engineer is required')
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Github account of the Engineer?',
            validate: (githubEng) => {  
                if (githubEng) {
                    return true;
                } else {
                    console.log('Github page of the Engineer is required!')
                    return false;
                }
            }   
        }
    ])
    .then(recruitInput => {
        teamMembers.push(new Engineer(recruitInput.id, recruitInput.name, recruitInput.email, recruitInput.github));
        // console.log(teamMembers);
        return startMenu()    
    })
}

// Function for Inputting Manager

const managerInput = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Enter in the Id that the Manager will be using',
            validate: (idManager) => {  
                if (idManager) {
                    return true;
                } else {
                    console.log('Id of the Manager is required')
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager?',
            validate: (nameManager) => {  
                if (nameManager) {
                    return true;
                } else {
                    console.log('Name of the Manager is required')
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Manager?',
            validate: (emailManager) => {  
                if (emailManager) {
                    return true;
                } else {
                    console.log('Email of the Manager is required')
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'office',
            message: 'Where is the office of the Manager located?',
            validate: (officeNumber) => {  
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please ')
                    return false;
                }
            }   
        }
    ])
    .then(recruitInput => {
        teamMembers.push (new Manager (recruitInput.id, recruitInput.name, recruitInput.email, recruitInput.office));
        // console.log(teamMembers);
        return startMenu()
    })
}

// Function to create HTML file

const finishHTML = () => {
    // console.log(teamMembers)
    fs.writeFileSync('./dist/index.html', createHTML(teamMembers), 'utf-8');
}


start()