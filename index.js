const inquirer = require('inquirer');
const { Engineer } = require('./lib/engineer');
const { Intern } = require('./lib/intern');
const { Manager } = require('./lib/manager');
const teamBuilder = require('./src/TeamBuilder');
const teamPage = require('./src/PageBuilder');

var manager;
var engineer;
var intern;
var selection;

function init() {
    teamPage.addTop();
    inquirer.prompt(teamBuilder.mgrQuestions).then((answers) => {
        createManager(answers);
        //selectFromMenu();
    });

}
init();

function selectFromMenu() {
    inquirer.prompt(teamBuilder.employeeMenu).then((data) => {
        selection = data.empMenu;
        switch (selection) {
            case 'Engineer':
                inquirer.prompt(teamBuilder.engQuestions)
                    .then((answers) => {
                        createEngineer(answers);
                    })
                //selectFromMenu();
                break;
            case 'Intern':
                inquirer.prompt(teamBuilder.intQuestions)
                    .then((answers) => {
                        createIntern(answers);
                    });
                //selectFromMenu();
                break;
            case 'Exit':
                break;
        }
        //   teamPage.addBottom();
    });
}

function createManager(data) {
    manager = new Manager(data.mgrName, data.mgrEmail, data.mgrOffice);
    teamPage.addManager(manager);

    console.log("Manager ID: " + manager.getId());
    console.log(manager.getName());
    console.log(manager.getEmail());
    console.log(manager.getOfficeNumber());
    console.log(manager.getRole());

    goAgain();
    
}
function createEngineer(data) {
    engineer = new Engineer(data.engName, data.engEmail, data.engGhUsername);
    teamPage.addEngineer(engineer);

    console.log("Engineer ID: " + engineer.getId());
    console.log(engineer.getName());
    console.log(engineer.getEmail());
    console.log(engineer.getGithub());
    console.log(engineer.getRole());
    
    goAgain();
}

function createIntern(data) {
    intern = new Intern(data.intName, data.intEmail, data.intSchool);
    teamPage.addIntern(intern);
    console.log("Intern ID: " + intern.getId());
    console.log(intern.getName());
    console.log(intern.getEmail());
    console.log(intern.getSchool());
    console.log(intern.getRole());

    goAgain();
}

function goAgain(){
    inquirer.prompt(teamBuilder.toBeContinued)
        .then((answers) => {
            if (answers.willContinue === 'Yes')
                selectFromMenu();
            else
                teamPage.addBottom();
        });
}