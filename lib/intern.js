const Employee = require('./employee');

class Intern extends Employee {
    constructor (id, name, email, school) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
    }

    getSchoolName() {
        return this.school;
    }
    
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;