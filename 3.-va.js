const employees = new Set([
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" }
]);

function calculateAverageSalary(employees) {
    if (employees.size === 0) {
        return "Error: Employees set is empty.";
    }

    let departments = new Map();

    employees.forEach(employee => {
        if (!departments.has(employee.department)) {
            departments.set(employee.department, { totalSalary: 0, count: 0 });
        }

        let deptInfo = departments.get(employee.department);
        deptInfo.totalSalary += employee.salary;
        deptInfo.count++;
    });

    let maxAvgSalary = -Infinity;
    let topDepartment = null;

    departments.forEach((deptInfo, department) => {
        let avgSalary = deptInfo.totalSalary / deptInfo.count;
        if (avgSalary > maxAvgSalary) {
            maxAvgSalary = avgSalary;
            topDepartment = { department, average: avgSalary };
        }
    });

    return [topDepartment];
}

const result = calculateAverageSalary(employees);
console.log(result);
