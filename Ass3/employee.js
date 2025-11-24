// 1-Create a class Employee with properties: firstName, lastName, age, salary.
// 2-Add a method to class  getFullName() that returns "FirstName LastName".
// 3- out class Export an array departments with some department names (["IT","HR","Finance","Sales"]).

class Employee {
    constructor(firstName, lastName, age, salary) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age       = age;
        this.salary    = salary;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const departments = ["IT", "HR", "Finance", "Sales"];

export {
    Employee,
    departments
}