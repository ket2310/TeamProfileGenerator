const { Engineer } = require('../lib/engineer')

describe("Engineer", () => {
    describe("Initialzation", () => {
        it("should set employeeName, email, and github when created.", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const github = "ket2310"
            const obj = new Engineer(empName, email, github);

            expect(obj.employeeName).toEqual(empName);
            expect(obj.email).toEqual(email);
            expect(obj.githubUrl).toEqual(github)
        });
    });

    describe("getGithub", () => {
        it("should return the Engineer's office number.", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const github = "ket2310"
            const obj = new Engineer(empName, email, github);

            expect(github).toEqual(obj.getGithub());
        });
    });

    describe("getRole", () => {
        it("should return the role name", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const github = "ket2310"
            const obj = new Engineer(empName, email, github);

            const empRole = obj.getRole();
            expect(empRole).toEqual("Engineer");
        });
    });

    describe("getName", () => {
        it("should return the name of the engineer", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const github = "ket2310"
            const obj = new Engineer(empName, email, github);

            const Name = obj.getName();

            expect(Name).toEqual(obj.employeeName);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the employee", () => {
            const empName = "Kirk Thomas";
            const email = "dablumaroon@gmail.com";
            const github = "ket2310"
            const obj = new Engineer(empName, email, github);

            const empEmail = obj.getEmail();

            expect(empEmail).toEqual(obj.email);
        });
    });
});