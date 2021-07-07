class Employee {
    constructor(employeeName, email) {
        this.id = Math.floor(Math.random() * 99) + 1;
        this.employeeName = employeeName;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.employeeName;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;