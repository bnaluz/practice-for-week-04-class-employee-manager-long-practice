// Begin by creating a __manager.js__ file and requiring your `Employee` module.
// Next, you will define your `Manager` class as a child of the `Employee` class
// that inherits all of the same properties.
// > **Note**: A `Manager` may be under another `Manager` because
// >`Manager`s might report to higher-level `Manager`s.

// You will need an additional `employees` property that holds an array of all
// `Employee`s assigned to the `Manager`.

const Employee = require('./employee');

// Create an instance method named `addEmployee(employee)`. This method should add
// an `Employee` instance to a `Manager` instance's `employees` array.

// In addition to passing the test specs, you should set up some more local tests
// to ensure your method is working properly.

class Manager extends Employee {
  constructor(name, salary, title, manager, employees = []) {
    super(name, salary, title, manager);
    this.employees = employees;
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
}

const splinter = new Manager('Splinter', 100000, 'Sensai');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

splinter.addEmployee(leo);
splinter.addEmployee(mikey);
splinter.addEmployee(donnie);
splinter.addEmployee(raph);

console.log('After: ', splinter);

module.exports = Manager;
