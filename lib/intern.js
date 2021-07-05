const Employee = require('./employee');

class Intern extends Employee {
    constructor (nm, em, school) {
        super(nm, em); 
        this.schoolName = school;
    }

    getSchool( ) {
        return this.schoolName  ;
    }

    getRole(){
        return "Intern";
    }    
    
}

module.exports = {
    Intern
}