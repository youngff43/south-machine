const Intern = require('../lib/Intern');

test('creates intern school', () => {
    const testSchool = "school";
    const newIntern = new Intern("Eric", 1, "test@test.com", testSchool);
    expect(newIntern.school).toBe(testSchool);
});

test('gets school from getSchool()', () => {
    const testGetSchool = "school";
    const newIntern = new Intern("Eric", 1, "test@test.com", "school");
    expect(newIntern.getSchool()).toBe(testGetSchool);
});

test('creates Intern role from getRole()', () => {
    const testIntern = "Intern";
    const newIntern = new Intern("Eric", 1, "test@test.com", "school");
    expect(newIntern.getRole()).toBe(testIntern);
});