const Intern = require('../lib/intern');
const intern = new Intern (10, 'Kobe', 'internkobe@gmail.com', 'UofTScarb');

decribe('id', () => {
    it('should return intern object with Id', () => {
        expect(intern.id).toBe(10);
    });
});
decribe('name', () => {
    it('should return intern object with name', () => {
        expect(intern.name).toBe('Kobe');
    });
});
decribe('email', () => {
    it('should return intern object with email', () => {
        expect(intern.email).toBe('internkobe@gmail.com');
    });
});
decribe('school', () => {
    it('should return school where the intern attended', () => {
        expect(intern.school).toBe('UofTScarb');
    });
});
decribe('getSchool', () => {
    it('should return the current school the intern is at', () => {
        expect(intern.getSchoolName()).toBe('UofTScarb');
    });
});
decribe('getRole', () => {
    it('should return role of intern', () => {
        expect(intern.getRole()).toBe('Intern');
    });
})