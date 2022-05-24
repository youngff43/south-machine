const Manager = require('../lib/Manager.js');

test('creates manager office number', () => {
    const testOfficeNumber = 10101;
    const newManager = new Manager("Eric", 1, "test@test.com", testOfficeNumber);
    expect(newManager.officeNumber).toBe(testOfficeNumber);
});

test('creates Manager role from getRole()', () => {
    const testManager = "Manager";
    const newManager = new Manager("Eric", 1, "test@test.com", 10101);
    expect(newManager.getRole()).toBe(testManager);
});

test('gets office number from getOfficeNummber()', () => {
    const testOfficeNumber = 10101;
    const newManager = new Manager("Eric", 1, "test@test.com", testOfficeNumber);
    expect(newManager.getOfficeNumber()).toBe(testOfficeNumber);
});


