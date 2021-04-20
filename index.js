const licenses = [
    {
        name: 'Apache',
        notice: `Licensed under the Apache License, Version 2.0 (the "License");
                 you may not use this file except in compliance with the License.
                 You may obtain a copy of the License at
     
                 http://www.apache.org/licenses/LICENSE-2.0
     
                 Unless required by applicable law or agreed to in writing, software
                 distributed under the License is distributed on an "AS IS" BASIS,
                 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 See the License for the specific language governing permissions and
                 limitations under the License.'`,
        badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        link: 'https://opensource.org/licenses/Apache-2.0'
    },
    {
        name: 'GNU',
        notice: `This program is free software: you can redistribute it and/or modify
                it under the terms of the GNU General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.
            
                This program is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU General Public License for more details.
            
                You should have received a copy of the GNU General Public License
                along with this program.  If not, see <https://www.gnu.org/licenses/>.'`,
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        link: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {
        name: 'MIT',
        notice: `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        link: 'https://opensource.org/licenses/MIT'
    },
    {
        name: 'Mozilla Public License ',
        notice: 'You may not remove or alter the substance of any license notices (including copyright notices, patent notices, disclaimers of warranty, or limitations of liability) contained within the Source Code Form of the Covered Software, except that You may alter any license notices to the extent required to remedy known factual inaccuracies.',
        badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        link: 'https://opensource.org/licenses/MPL-2.0'
    }
]

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
    choices: licenceChoices()
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const data = createMarkdownData(answers);
        console.log(data);
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
        license: getLicenceDetails(answers['license']),
        test: answers['test']
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
