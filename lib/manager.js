const Employee = require('./employee');

class Manager extends Employee {
    constructor () {
        super(id, employeeNamw, email);
        this.officeNumber = 0;
    }

    getOfficeNumber(num){
        this.officeNumber = num;
    }
    
    getRole(){
        return "Manager";
    }    
    
}