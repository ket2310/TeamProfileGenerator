const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should randomly set an id number when created", () => {
            const employeeName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";

            const obj = new Employee(employeeName, email);
            expect("id" in obj).toEqual(true);
        });
        it("should set employeeName, and email when created.", () => {
            const employeeName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";

            const obj = new Employee(employeeName, email);

            expect(obj.employeeName).toEqual(employeeName);
            expect(obj.email).toEqual(email);
        });
    });

    describe("getId", () => {
        it("should return the id number of the employee", () => {
            const employeeName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";

            const obj = new Employee(employeeName, email);

            const empId = obj.getId();

            expect(empId).toEqual(obj.id);
        });
    });

    describe("getName", () => {
        it("should return the name of the employee", () => {
            const employeeName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";

            const obj = new Employee(employeeName, email);

            const empName = obj.getName();

            expect(empName).toEqual(obj.employeeName);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the employee", () => {
            const employeeName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";

            const obj = new Employee(employeeName, email);

            const empEmail = obj.getEmail();

            expect(empEmail).toEqual(obj.email);
        });
    });

    describe("getRole", () => {
        it("should return the role name", () => {
            const employeeName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";

            const obj = new Employee(employeeName, email);

            const empRole = obj.getRole();

            expect(empRole).toEqual("Employee");
        });
    });
});