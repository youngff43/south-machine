const Engineer = require('../lib/Engineer');

test('creates engineer github', () => {
    const testGithub = "githubuser";
    const newEngineer = new Engineer("Eric", 1, "test@test.com", testGithub);
    expect(newEngineer.github).toBe(testGithub);
});

test('gets github from github()', () => {
    const testGithub = "githubuser";
    const newEngineer = new Engineer("Eric", 1, "test@test.com", testGithub);
    expect(newEngineer.getGithub()).toBe(testGithub);
});

test('creates Engineer role from getRole()', () => {
    const testEngineer = "Engineer";
    const newEngineer = new Engineer("Eric", 1, "test@test.com", "githubuser");
    expect(newEngineer.getRole()).toBe(testEngineer);
});