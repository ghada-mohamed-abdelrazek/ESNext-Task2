// 1- Import everything from both modules.
// 2-Create a few employees, store them in an array.
// 3-Print all employees’ info on Document not console.

import { departments } from './employee.js';
import { addEmployee, findEmployee, increaseSalary, employees } from './employeeOps.js';

addEmployee("Ghada", "Mohamed", 30, 8000);
addEmployee("Ali", "Hassan", 28, 8000);
addEmployee("Sara", "Ibrahim", 26, 7000);
addEmployee("Ahmed", "Ibrahim", 26, 8000);
let h = document.createElement("h2");
h.textContent = "Employees List";
document.body.appendChild(h);
employees.forEach(emp => {
    let p1 = document.createElement("P");
    p1.textContent = `Name: ${emp.getFullName()} 
        Age: ${emp.age} 
        Salary: ${emp.salary}`
        document.body.appendChild(p1);
});
increaseSalary("Ghada Mohamed", 1500);
let _h = document.createElement("h2");
_h.textContent = "Employees List After Increasing";
document.body.appendChild(_h);
employees.forEach(emp => {
    let p2 = document.createElement("P");
    p2.textContent = `Name: ${emp.getFullName()} 
        Age: ${emp.age} 
        New Salary: ${emp.salary} `
        document.body.appendChild(p2);
});
let title = document.createElement("h3");
title.textContent = "Departments";

let list = document.createElement("p");
list.textContent = departments.join(", ");

document.body.appendChild(title);
document.body.appendChild(list);
