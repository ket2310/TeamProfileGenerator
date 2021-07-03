class Employee {
    constructor() {
        this.id = 0;
        this.employeeName = undefined;
        this.email = undefined;
    }

    getId(eId){
        this.id = eId;
    }
        
    getName(eName){
        this.employeeName = eName;
    }

    getEmail(eEmail){
        this.email = eEmail;
    }

    getRole(){
        return "Employee";
    }    

}