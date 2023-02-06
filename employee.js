class Employee {
    constructor(name, salary, title, manager=null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
        if (this.manager) {
            this.manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        const bonus = this.salary * multiplier;
        return bonus;
    }
}


module.exports = Employee;
