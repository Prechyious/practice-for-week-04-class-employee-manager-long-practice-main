const Employee = require("./employee");


class Manager extends Employee {
    constructor(name, salary, title, manager=null) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        let bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return bonus;
    }

    _totalSubSalary() {
        let sum = 0;
        for (const employee of this.employees) {
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        }
        return sum;
    }
}



module.exports = Manager;
