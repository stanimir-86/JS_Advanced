class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if ([name, salary, position, department].some((param) => param === "" || param === undefined || param === null)) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartmentName = "";
        let bestAverageSalary = 0;

        for (const department in this.departments) {
            const departmentEmployees = this.departments[department];
            const totalSalary = departmentEmployees.reduce((acc, emp) => acc + emp.salary, 0);
            const averageSalary = totalSalary / departmentEmployees.length;

            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDepartmentName = department;
            }
        }

        if (bestDepartmentName !== "") {
            const bestDepartmentEmployees = this.departments[bestDepartmentName];
            const sortedEmployees = bestDepartmentEmployees
                .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
                .map((emp) => `${emp.name} ${emp.salary} ${emp.position}`);

            const result = `Best Department is: ${bestDepartmentName}\nAverage salary: ${bestAverageSalary.toFixed(
                2
            )}\n${sortedEmployees.join("\n")}`;

            return result;
        }

        return ""; // Return an empty string if there are no departments.
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
