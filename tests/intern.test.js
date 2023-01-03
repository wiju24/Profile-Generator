const Intern = require('../lib/intern');
const intern = new Intern (10, 'Kobe', 'internkobe@gmail.com', 'UofTScarb');

test('id', () => {
    it('should return intern object with Id', () => {
        expect(intern.id).toEqual(10);
    });
});
test('name', () => {
    it('should return intern object with name', () => {
        expect(intern.name).toEqual('Kobe');
    });
});
test('email', () => {
    it('should return intern object with email', () => {
        expect(intern.email).toEqual('internkobe@gmail.com');
    });
});
test('school', () => {
    it('should return school where the intern attended', () => {
        expect(intern.school).toEqual('UofTScarb');
    });
});
test('getSchool', () => {
    it('should return the current school the intern is at', () => {
        expect(intern.getSchoolName()).toEqual('UofTScarb');
    });
});
test('getRole', () => {
    it('should return role of intern', () => {
        expect(intern.getRole()).toEqual('Intern');
    });
})