const Employee = require('./employee');

class Manager extends Employee {
    constructor(id, name, email, roomNumber){
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.roomNumber = roomNumber;
    }

    getRoomNumber() {
        return this.roomNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;