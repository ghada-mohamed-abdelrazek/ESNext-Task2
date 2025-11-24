// 1-Import the Employee class.
// 2- Create functions to:
// Add employee(s) to an array.
// 3-Find employee by name.
// 4-Increase salary for an employee.
import { Employee } from './employee.js';

let employees = [];
function addEmployee(firstName, lastName, age, salary) {
    const emp = new Employee(firstName, lastName, age, salary);
    employees.push(emp);
}

function findEmployee(fullName) {
    return employees.find(emp => emp.getFullName() === fullName);
}

function increaseSalary(fullName, amount) {
    let emp = findEmployee(fullName);
    if (emp) {
        emp.salary += amount;
        return true;
    }
    return false;
}
export {
    employees,
    addEmployee,
    findEmployee,
    increaseSalary
}




