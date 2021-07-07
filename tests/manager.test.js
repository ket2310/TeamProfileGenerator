const { Manager } = require('../lib/manager');

describe("Manager", () => {
    describe("Initialzation", () => {
        it("should set employeeName, email, and office number when created.", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const officeNumber = 45;
            const obj = new Manager(empName, email, officeNumber);

            expect(obj.employeeName).toEqual(empName);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber)
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the manager's office number.", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const officeNumber = 45;
            const obj = new Manager(empName, email, officeNumber);

            expect(officeNumber).toEqual(obj.getOfficeNumber());
        });
    });

    describe("getRole", () => {
        it("should return the role name", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const officeNumber = 45;
            const obj = new Manager(empName, email, officeNumber);

            const empRole = obj.getRole();
            expect(empRole).toEqual("Manager");
        });
    });

    describe("getEmail", () => {
        it("should return the name of the employee", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const officeNumber = 45;
            const obj = new Manager(empName, email, officeNumber);

            expect(email).toEqual(obj.getEmail());
        });
    });

    describe("getName", () => {
        it("should return the name of the employee", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const officeNumber = 45;
            const obj = new Manager(empName, email, officeNumber);

            const Name = obj.getName();

            expect(Name).toEqual(obj.employeeName);
        });
    });

});

