const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('create name from employee object', () => {
    const name = "Eric";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
});

test('gets name from getName()', () => {
    const testName = "Eric";
    const newEmployee = new Employee(testName);
    expect(newEmployee.getName()).toBe(testName);
});

test('creates employees id', () => {
    const testId = 10;
    const newEmployee = new Employee("testname", testId);
    expect(newEmployee.id).toBe(testId);
});

test('gets id from getId()', () => {
    const testId = "10";
    const newEmployee = new Employee("testName", testId);
    expect(newEmployee.getId()).toBe(testId);
});

test('creates employee email', () => {
    const testEmail = "test@test.com";
    const newEmployee = new Employee("testname", 1, testEmail);
    expect(newEmployee.email).toBe(testEmail);
});

test('gets employee email from getEmail', () => {
    const testEmail = "test@test.com";
    const newEmployee = new Employee("testname", 1, testEmail);
    expect(newEmployee.getEmail()).toBe(testEmail);
});

test('creates role from getRole()', () => {
    const testEmployee = "Employee";
    const newEmployee = new Employee("Eric", 1, "test@test.com");
    expect(newEmployee.getRole()).toBe(testEmployee);
});


