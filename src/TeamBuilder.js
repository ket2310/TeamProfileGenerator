const mgrQuestions = [
    {
        type: 'input',
        message: 'Enter the team manager\'s name.',
        name: 'mgrName',
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
];

const engQuestions = [
    {
        type: 'input',
        message: 'Enter the engineer\'s name.',
        name: 'engName',
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
        message: 'Enter the intern\'s email.',
        name: 'intEmail',
    },
    {
        type: 'input',
        message: 'Enter the intern\'s school.',
        name: 'intSchool',
    },
];

const employeeMenu =    {
    type: 'list',
    message: 'Provide the name of an engineer or an intern.',
    name: 'empMenu',
    choices: ['Engineer', 'Intern', 'Exit'],
};

module.exports = {
    mgrQuestions,
    engQuestions,
    intQuestions,
    employeeMenu
}