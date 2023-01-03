const Employee = require('../lib/employee');
const employee = new Employee (24, 'Vijithiran', 'vijithiran_navajeevayokan@hotmail.com')

describe('id', () => {
    it('should return employee object with Id', () => {
        expect(employee.id).toBe(24);
    });
});
describe('name', () => {
    it('should return employee object with name', () => {
        expect(employee.name).toBe('Vijithiran');
    });
});
describe('email', () => {
    it('should return employee object with email', () => {
        expect(employee.email).toBe('vijithiran_navajeevayokan@hotmail.com');
    });
});
describe('getId', () => {
    it('should return employee Id', () => {
        expect(employee.getId()).toBe('24');
    });
});
describe('getName', () => {
    it('should return employee name', () => {
        expect(employee.getName()).toBe('Vijithiran');
    });
});
describe('getEmail', () => {
    it('should return employee email', () => {
        expect(employee.getEmail()).toBe('vijithiran_navajeevayokan@hotmail.com');
    });
});
describe('getRole', () => {
    it('should return role of Employee', () => {
        expect(employee.getRole()).toBe('Employee');
    });
})


