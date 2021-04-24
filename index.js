const licenses = [
    {
        name: 'Apache',
        notice: 'Licensed under the Apache License, Version 2.0',
        badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        link: 'https://opensource.org/licenses/Apache-2.0'
    },
    {
        name: 'GNU',
        notice: 'GNU GENERAL PUBLIC LICENSE',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        link: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {
        name: 'MIT',
        notice: 'LICENCED UNDER THE MIT LICENSE (MIT)',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        link: 'https://opensource.org/licenses/MIT'
    },
    {
        name: 'Mozilla Public License',
        notice: 'Licensed under the Mozilla Public License',
        badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        link: 'https://opensource.org/licenses/MPL-2.0'
    },
    {
        name: 'Eclipse',
        notice: 'Licensed under the Eclipse Public License 1.0',
        badge: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        link: 'https://opensource.org/licenses/EPL-1.0'
    }
]

// TODO: Include packages needed for this application
const fs  = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const readMeFile = 'README-test.md';

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'githubusername',
    message: 'what is your git hub user name? ',
},
{
    type: 'input',
    name: 'emailaddress',
    message: 'what is your git hub email address? ',
},
{
    type: 'input',
    name: 'projecttitle',
    message: 'what is your project title? ',
},
{
    type: 'input',
    name: 'description',
    message: 'what is the description? ',
},
{
    type: 'input',
    name: 'installation',
    message: 'what are the installation instructions? ',
},
{
    type: 'input',
    name: 'usage',
    message: 'what is the usage information? ',
},
{
    type: 'input',
    name: 'contribution',
    message: 'what are the contribution guidelines? ',
},
{
    type: 'input',
    name: 'test',
    message: 'what are the test instructions? ',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: licenceChoices()
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README file saved');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const data = createMarkdownData(answers);
        const markDown = generateMarkdown(data);
        writeToFile(readMeFile, markDown);
    });
}

function createMarkdownData(answers) {
    return {
        title: answers['projecttitle'],
        description: answers['description'],
        installation: answers['installation'],
        usage: answers['usage'],
        contribution: answers['contribution'],
        license: getLicenceDetails(answers['license']),
        test: answers['test'],
        email: answers['emailaddress'],
        githubusername: answers['githubusername']
    }
}

function licenceChoices() {
    const list = [];
    licenses.forEach((l) => list.push(l.name))
    return list;
}

function getLicenceDetails(choice) {
    return licenses.find((x) => x.name === choice);
}

// Function call to initialize app

init();
