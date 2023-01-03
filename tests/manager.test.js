const Manager = require('../lib/intern');
const manager = new Manager (23, 'Jordan', 'managerjordan@gmail.com', '2323');

test('id', () => {
    it('should return manager object with Id', () => {
        expect(manager.id).toEqual(23);
    });
});
test('name', () => {
    it('should return manager object with name', () => {
        expect(manager.name).toEqual('Jordan');
    });
});
test('email', () => {
    it('should return manager object with email', () => {
        expect(manager.email).toEqual('managerjordan@gmail.com');
    });
});
test('office room number', () => {
    it('should return the room number of the Manager', () => {
        expect(manager.roomNumber).toEqual('2424');
    });
});
test('getRoomNumber', () => {
    it('should return the current school the intern is at', () => {
        expect(manager.getRoomNumber()).toEqual('2424');
    });
});
test('getRole', () => {
    it('should return role of Manager', () => {
        expect(manager.getRole()).toEqual('Manager');
    });
})