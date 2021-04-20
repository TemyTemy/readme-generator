// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
    name: 'project title',
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
    .then(answers => {console.log(answers)});
}

// Function call to initialize app

init();
