const Engineer = require('../lib/engineer');
const engineer = new Engineer(8, 'Steve', 'engineersteve@gmail.com', 'wiju24');

test('id', () => {
    it('should return engineer object with Id', () => {
        expect(engineer.id).toEqual(8);
    });
});
test('name', () => {
    it('should return engineer object with name', () => {
        expect(engineer.name).toEqual('Steve');
    });
});
test('email', () => {
    it('should return engineer object with email', () => {
        expect(engineer.email).toEqual('engineersteve@gmail.com');
    });
});
test('pullGithubAccount', () => {
    it('should return engineer object with username for Github', () => {
        expect(engineer.github).toEqual('wiju24');
    });
});
test('getGithubLink', () => {
    it('should return username from Github', () => {
        expect(engineer.pullGithubAccount()).toEqual('https://github.com/wiju24');
    });
});
test('getRole', () => {
    it('should return role of Engineer', () => {
        expect(engineer.getRole()).toEqual('Engineer');
    });
})