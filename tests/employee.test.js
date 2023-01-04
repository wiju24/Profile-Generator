const Employee = require('../lib/employee.js');
const employee = new Employee (24, 'Vijithiran', 'vijithiran_navajeevayokan@hotmail.com')

describe('id', () => {
    it('should return employee object with Id', () => {
        expect(employee.id).toEqual(24);
    });
});
describe('name', () => {
    it('should return employee object with name', () => {
        expect(employee.name).toEqual('Vijithiran');
    });
});
describe('email', () => {
    it('should return employee object with email', () => {
        expect(employee.email).toEqual('vijithiran_navajeevayokan@hotmail.com');
    });
});
describe('getId', () => {
    it('should return employee Id', () => {
        expect(employee.getId()).toEqual(24);
    });
});
describe('getName', () => {
    it('should return employee name', () => {
        expect(employee.getName()).toEqual('Vijithiran');
    });
});
describe('getEmail', () => {
    it('should return employee email', () => {
        expect(employee.getEmail()).toEqual('vijithiran_navajeevayokan@hotmail.com');
    });
});
describe('getRole', () => {
    it('should return role of Employee', () => {
        expect(employee.getRole()).toEqual('Employee');
    });
})


