const Manager = require('../lib/manager');
const manager = new Manager (23, 'Jordan', 'managerjordan@gmail.com', 2323);

describe('id', () => {
    it('should return manager object with Id', () => {
        expect(manager.id).toBe(23);
    });
});
describe('name', () => {
    it('should return manager object with name', () => {
        expect(manager.name).toBe('Jordan');
    });
});
describe('email', () => {
    it('should return manager object with email', () => {
        expect(manager.email).toBe('managerjordan@gmail.com');
    });
});
describe('office room number', () => {
    it('should return the room number of the Manager', () => {
        expect(manager.roomNumber).toBe(2323);
    });
});
describe('getRoomNumber', () => {
    it('should return the current room number the Manager is at', () => {
        expect(manager.getRoomNumber()).toBe(2323);
    });
});
describe('getRole', () => {
    it('should return role of Manager', () => {
        expect(manager.getRole()).toBe('Manager');
    });
})