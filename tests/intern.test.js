const { Intern } = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should randomly set an id number when created", () => {
            const InternName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const school = "UTSA";

            const obj = new Intern(InternName, email, school);
            expect("id" in obj).toEqual(true);
        });
        it("should set InternName, email, and school when created.", () => {
            const InternName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const school = "UTSA";

            const obj = new Intern(InternName, email, school);
            expect(obj.employeeName).toEqual(InternName);
            expect(obj.email).toEqual(email);
            expect(obj.schoolName).toEqual(school);
        });
    });

    describe("getId", () => {
        it("should return the id number of the Intern", () => {
            const InternName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const school = "UTSA";

            const obj = new Intern(InternName, email, school);
            const empId = obj.getId();

            expect(empId).toEqual(obj.id);
        });
    });

    describe("getName", () => {
        it("should return the name of the Intern", () => {
            const InternName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const school = "UTSA";

            const obj = new Intern(InternName, email, school);
            const empName = obj.getName();

            expect(empName).toEqual(obj.employeeName);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the Intern", () => {
            const InternName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const school = "UTSA";

            const obj = new Intern(InternName, email, school);
            const empEmail = obj.getEmail();

            expect(empEmail).toEqual(obj.email);
        });
    });

    describe("getRole", () => {
        it("should return the role name", () => {
            const InternName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const school = "UTSA";

            const obj = new Intern(InternName, email, school);
            const empRole = obj.getRole();

            expect(empRole).toEqual("Intern");
        });
    });

    describe("getSchool", () => {
        it("should return the role name", () => {
            const InternName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const school = "UTSA";

            const obj = new Intern(InternName, email, school);
            const empSchool = obj.getSchool();

            expect(school).toEqual(empSchool);
        });
    });
});