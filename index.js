// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const writeFile = require('./utils/generateMarkdown');
const generatePage = require('./src/page-template');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your name "First Last". (Required)',
        validate: nameInput => {
            if (!nameInput) {
                console.log('Please enter your name!');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'organization',
        message: 'Please enter the name of your organization. (Required)',
        validate: organizationInput => {
            if (!organizationInput) {
                console.log('Please enter your organization name!');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'Please enter an email you can be reached to answer questions. (Required)',
        validate: emailInput => {
            if (!emailInput) {
                console.log('Please enter your email!');
                return false;
            }
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const validEmail = re.test(String(emailInput).toLowerCase());
            if (!validEmail) {
                console.log('Please enter a valid email address!');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'userGithub',
        message: 'Please enter your GitHub username. (Required)',
        validate: githubInput => {
            if (!githubInput) {
                console.log('Please enter your GitHub username!');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is project title? (Required)',
        validate: titleInput => {
            if (!titleInput) {
                console.log('Please enter your title!');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter your project description. (Required)',
        validate: description => {
            if (!description) {
                console.log('Please enter a description!');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions!',
        validate: installInput => {
            if (!installInput) {
                console.log('Please enter a description!');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'useageInfo',
        message: 'Please enter the useage information for you application.'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please enter your applications contribution guidelines.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please enter the test intructions.'
    },
    {
        type: 'list',
        name: 'licenseType',
        message: 'Please choose one of the following Open Source Licenses.',
        choices: ['GNU General Public License v3.0', 'MIT License']
    },
    {
        type: 'input',
        name: 'licenseYear',
        message: 'Please enter the year for your license.'
    },
    {
        type: 'input',
        name: 'licenseName',
        message: 'Please enter the name to on the License.'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFile = fileContent => {
    return new Promise(( resolve, reject ) => {
      fs.writeFile('./dist/readme.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File Created!'
        });
      });
    });
  };

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
            .then(data => {
                // console.log(data);
                return generatePage(data);
            })
            .then(readmeData => {
                return writeFile(readmeData);
            })
};

// Function call to initialize app
init();
