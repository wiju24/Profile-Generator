const Engineer = require('../lib/engineer');
const engineer = new Engineer(8, 'Steve', 'engineersteve@gmail.com', 'wiju24');

describe('id', () => {
    it('should return engineer object with Id', () => {
        expect(engineer.id).toBe(8);
    });
});
describe('name', () => {
    it('should return engineer object with name', () => {
        expect(engineer.name).toBe('Steve');
    });
});
describe('email', () => {
    it('should return engineer object with email', () => {
        expect(engineer.email).toBe('engineersteve@gmail.com');
    });
});
describe('pullGithubAccount', () => {
    it('should return engineer object with username for Github', () => {
        expect(engineer.github).toBe('wiju24');
    });
});
describe('getGithubLink', () => {
    it('should return username from Github', () => {
        expect(engineer.pullGithubAccount()).toBe('wiju24');
    });
});
describe('getRole', () => {
    it('should return role of Engineer', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
})