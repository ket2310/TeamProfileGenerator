const Employee = require('./employee');

class Engineer extends Employee{
    constructor() {
        super(id, employeeName, email);
        this.githubUrl = undefined;
    }

    getGithub(gh){
        this.githubUrl = gh;
    }

    getRole(){
        return "Engineer";
    }    
    
}