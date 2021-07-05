const Employee = require('./employee');

class Manager extends Employee {
    constructor (nm, em,officeNumber) {
        super(nm, em);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    
    getRole(){
        return "Manager";
    }    
    
}
module.exports = {Manager}