// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license.badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license.link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license.notice
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
    
## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contributions](#Contributions)
4. [License](#License)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contribution}

## License
${renderLicenseSection(data.license)}
For more information on this license, visit: ${renderLicenseLink(data.license)}

## Tests
${data.test}

## Questions
For any questions on installation and usage, send me an email on ${data.email} or visit my github page at https://www.github.com/${data.githubusername}


`;
}

module.exports = generateMarkdown;
