// TODO: Include packages needed for this application
const fs  = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const readMeLines = [];

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
    message: 'Choose a license - enter MIT or Apache',
    choices: ['MIT', 'Apache']
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const data = createMarkdownData(answers);
        const markDown = generateMarkdown(data);
        writeMarkDownToFile(markDown);
    });
}

function writeMarkDownToFile(txt) {
    fs.writeFile('README-test.md', txt, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README file saved');
        }
    });
}

function createMarkdownData(answers) {
    return {
        title: answers['projecttitle'],
        description: answers['description'],
        installation: answers['installation'],
        usage: answers['usage'],
        contribution: answers['contribution'],
        license: answers['license'],
        test: answers['test']
    }
}

// Function call to initialize app

init();
