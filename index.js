const inquirer = require('inquirer');
const { Engineer } = require('./lib/engineer');
const { Intern } = require('./lib/intern');
const { Manager } = require('./lib/manager');
const teamBuilder = require('./src/TeamBuilder');

var manager;
var engineer;
var intern;
var selection;

function init() {
    inquirer.prompt(teamBuilder.startQuestions).then((answers) => {
        createManager(answers);
        selection = answers.empMenu;
        //while (selection != '') {
            switch (answers.empMenu) {
                case 'Engineer':
                    inquirer.prompt(teamBuilder.engQuestions)
                        .then((answers) => {
                            createEngineer(answers);
                        });
                    break;
                case 'Intern':
                    inquirer.prompt(teamBuilder.intQuestions)
                    .then((answers) => {
                        createIntern(answers);
                    });
                    break;
            }
        //}
    });
};

init();

function createManager(data) {
    manager = new Manager(data.mgrName, data.mgrEmail, data.mgrOffice);
    console.log("Manager ID: " + manager.getId());
    console.log(manager.getName());
    console.log(manager.getEmail());
    console.log(manager.getOfficeNumber());
    console.log(manager.getRole());

}
function createEngineer(data) {
    engineer = new Engineer(data.engName, data.engEmail, data.engGhUsername);

    console.log("Engineer ID: " + engineer.getId());
    console.log(engineer.getName());
    console.log(engineer.getEmail());
    console.log(engineer.getGithub());
    console.log(engineer.getRole());
}

function createIntern(data) {
    intern = new Intern(data.intName, data.intEmail, data.intSchool);

    console.log("Intern ID: " + intern.getId());
    console.log(intern.getName());
    console.log(intern.getEmail());
    console.log(intern.getSchool());
    console.log(intern.getRole());
}