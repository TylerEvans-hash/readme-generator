const { renderLicenseBadge } = require('../utils/generateMarkdown');

module.exports = templateData => {
    const { title, description, installation, useageInfo, 
            contributionGuidelines, testInstructions, 
            userName, userEmail, userGithub, organizationName,
            licenseType, licenseYear, licenseName } = templateData;

    const license = { userName, organizationName, licenseName, licenseType, licenseYear };
    console.log(templateData);

    return `# ${title}

## Description
${description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage Information](#useage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Questions](#questions)
* [License](#license)
        
## Installation
${installation}

## Useage Information
${useageInfo}

## Contribution Guidelines
${contributionGuidelines}

## Test Instructions
${testInstructions}

## Questions
GitHub Link: [${userGithub}](https://github.com/${userGithub})

Email: [${userEmail}](${userEmail})

## License
${renderLicenseBadge(license)}
`;
};