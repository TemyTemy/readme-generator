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

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contribution}

## Badges
${renderLicenseSection(data.license)}

##Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
