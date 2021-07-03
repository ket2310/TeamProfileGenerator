const inquirer = require('inquirer');

const startQuestions = [
    {
        type: 'input',
        message: 'Enter the team manager\'s name.',
        name: 'mgrName',
    },
    {
        type: 'input',
        message: 'Enter the team manager\'s ID.',
        name: 'mgrID',
    },
    {
        type: 'input',
        message: 'Enter the team manager\'s email.',
        name: 'mgrEmail',
    },
    {
        type: 'input',
        message: 'Enter the team manager\'s office number.',
        name: 'mgrOffice',
    },
    {
        type: 'list',
        message: 'Provide the name of an engineer or an intern.',
        name: 'empMenu',
        choices: ['Engineer', 'Intern', ''],
    },

];

const engQuestions = [
    {
        type: 'input',
        message: 'Enter the engineer\'s name.',
        name: 'engName',
    },
    {
        type: 'input',
        message: 'Enter the engineer\'s ID.',
        name: 'engID',
    },
    {
        type: 'input',
        message: 'Enter the engineer\'s email.',
        name: 'engEmail',
    },
    {
        type: 'input',
        message: 'Enter the engineer\'s github user name.',
        name: 'engGhUsername',
    },

];

const intQuestions = [
    {
        type: 'input',
        message: 'Enter the intern\'s name.',
        name: 'intName',
    },
    {
        type: 'input',
        message: 'Enter the intern\'s ID.',
        name: 'intID',
    },
    {
        type: 'input',
        message: 'Enter the intern\'s email.',
        name: 'intEmail',
    },
    {
        type: 'input',
        message: 'Enter the intern\'s school.',
        name: 'intSchool',
    },

];