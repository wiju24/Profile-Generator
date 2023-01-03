const Intern = require('../lib/intern');
const intern = new Intern (10, 'Kobe', 'internkobe@gmail.com', 'UofTScarb');

describe('id', () => {
    it('should return intern object with Id', () => {
        expect(intern.id).toBe(10);
    });
});
describe('name', () => {
    it('should return intern object with name', () => {
        expect(intern.name).toBe('Kobe');
    });
});
describe('email', () => {
    it('should return intern object with email', () => {
        expect(intern.email).toBe('internkobe@gmail.com');
    });
});
describe('school', () => {
    it('should return school where the intern attended', () => {
        expect(intern.school).toBe('UofTScarb');
    });
});
describe('getSchool', () => {
    it('should return the current school the intern is at', () => {
        expect(intern.getSchoolName()).toBe('UofTScarb');
    });
});
describe('getRole', () => {
    it('should return role of intern', () => {
        expect(intern.getRole()).toBe('Intern');
    });
})