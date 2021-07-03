const Employee = require('./employee');

class Intern extends Employee {
    constructor () {
        super(id, employeeName, email); 
        this.schoolName = undefined;
    }

    getSchool(school) {
        this.schoolName = school;
    }

    getRole(){
        return "Intern";
    }    
    
}