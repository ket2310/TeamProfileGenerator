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
        '</div>';
    //writeToFile('./team.html', htmlText);
}

function addManager(manager) {
    outputString += `<section>
    <h1>${manager.getName()}</h1>
    <h2>${manager.getRole()}<h2>
    <p>Id: ${manager.getId()}</p>
    <p>Email: ${manager.getEmail()}</p>
    <p>Office Number: ${manager.getOfficeNumber()}</p>
</section>`
    //writeToFile('./team.html', htmlText);
}

function addEngineer(engineer) {
    outputString +=  `<section>
    <h1>${engineer.getName()}</h1>
    <h2>${engineer.getRole()}<h2>
    <p>Id: ${engineer.getId()}</p>
    <p>Email: ${engineer.getEmail()}</p>
    <p>Github: ${engineer.getGithub()}</p>
</section>`

    //writeToFile('./team.html', htmlText);
}

function addIntern(intern) {
    outputString +=  `<section>
    <h1>${intern.getName()}</h1>
    <h2>${intern.getRole()}<h2>
    <p>Id: ${intern.getId()}</p>
    <p>Email: ${intern.getEmail()}</p>
    <p>School: ${intern.getSchool()}</p>
</section>`

    //writeToFile('./team.html', htmlText);
}

function addBottom() {
    outputString +=  '</body></html>'

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