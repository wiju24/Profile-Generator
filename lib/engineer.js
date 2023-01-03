const Employee = require('./employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
    }

    pullGithubAccount() {
        return this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;