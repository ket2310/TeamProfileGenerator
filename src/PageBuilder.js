const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFileSync);

var outputString;
function addTop() {
    outputString = '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<title>Page</title>' +
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">' +
        '<link rel="stylesheet" href="./dist/css/style.css">' +
        '</head>' +
        '<body>' +
        '<div class="jumbotron" id="banner">' +
        '<h1 class="text-center">My Team</h1>' +
        '</div>' +
        '<main>' +
        '<div class="employees">';
    //writeToFile('./team.html', htmlText);
}

function addManager(manager) {
    outputString += `<section class="card">
    <header>${manager.getName()}</header>
    <h2>${manager.getRole()}<h2>
    <p>Id: ${manager.getId()}</p>
    <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
    <p>Office Number: ${manager.getOfficeNumber()}</p>
</section>`
    //writeToFile('./team.html', htmlText);
}

function addEngineer(engineer) {
    outputString +=  `<section class="card">
    <header>${engineer.getName()}</header>
    <h2>${engineer.getRole()}<h2>
    <p>Id: ${engineer.getId()}</p>
    <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
    <p>Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
</section>`

    //writeToFile('./team.html', htmlText);
}

function addIntern(intern) {
    outputString +=  `<section class="card">
    <header>${intern.getName()}</header>
    <h2>${intern.getRole()}<h2>
    <p>Id: ${intern.getId()}</p>
    <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
    <p>School: ${intern.getSchool()}</p>
</section>`

    //writeToFile('./team.html', htmlText);
}

function addBottom() {
    outputString +=  ' </div></main></body></html>'

    writeToFile('./team.html', outputString);
    console.log('THE END!!!!!!!!!!!!!!!!!')
}

function writeToFile(fileName, data) {
    writeFileAsync(fileName, data);
}

module.exports = {
    addTop,
    addManager,
    addEngineer,
    addIntern,
    addBottom
}