const Employee = require('../lib/employee');
const employee = new Employee (24, 'Vijithiran', 'vijithiran_navajeevayokan@hotmail.com')

test('id', () => {
    it('should return employee object with Id', () => {
        expect(employee.id).toEqual(24);
    });
});
test('name', () => {
    it('should return employee object with name', () => {
        expect(employee.name).toEqual('Vijithiran');
    });
});
test('email', () => {
    it('should return employee object with email', () => {
        expect(employee.email).toEqual('vijithiran_navajeevayokan@hotmail.com');
    });
});
test('getId', () => {
    it('should return employee Id', () => {
        expect(employee.getId()).toEqual('24');
    });
});
test('getName', () => {
    it('should return employee name', () => {
        expect(employee.getName()).toEqual('Vijithiran');
    });
});
test('getEmail', () => {
    it('should return employee email', () => {
        expect(employee.getEmail()).toEqual('vijithiran_navajeevayokan@hotmail.com');
    });
});
test('getRole', () => {
    it('should return role of Employee', () => {
        expect(employee.getRole()).toEqual('Employee');
    });
})


