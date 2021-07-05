const Employee = require('./employee');

class Engineer extends Employee{
    constructor(nm, em, gh) {
        super(nm, em);
        this.githubUrl = gh;
    }

    getGithub(){
        return this.githubUrl;
    }

    getRole(){
        return "Engineer";
    }    
    
}

module.exports = {
    Engineer
}