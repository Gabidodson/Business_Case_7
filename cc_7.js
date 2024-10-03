//Creating a Department Structure
let company = {
    departments: [
        {
            departmentName: "Sales",
            employees: [
{name: "Scooby Doo", salary: 80000, subordinates: []},
{name: "Shaggy Rogers", salary: 60000, subordinates: []},
{name: "Velma Dinkley", salary: 100000, subordinates: []}
    ]
},
{
      departmentName: "Marketing",
      employees: [
{name: "Daffy Duck", salary: 50000, subordinates: [
{name: "Porky Pig", salary: 65000, subordinates: []},
{name: "Bugs Bunny", salary: 95000, subordinates:[]}
]
}
    ]  
},
{
    departmentName: "Finance",
    employees: [
{name: "Mickey Mouse", salary: 200000, subordinates:[
{name: "Minnie Mouse", salary: 120000, subordinates:[]},
{name: "Daisy Duck", salary: 75000, subordinates: []},
{name: "Donald Duck", salary: 55000, subordinates: []}
    ]
}
    ]
}
    ]
};
//Recursive function to calculate salary for department
function calculateDepartmentSalary(department) {
     function calculateEmploeeSalary(employee) {
        let totalSalary = employee.salary;

        for (let subordinate of employee.subordinates) {
            totalSalary += calculateEmploeeSalary (subordinate);
        }
        return totalSalary;
     }
     let totalDepartmentSalary = 0;
     for (let employee of department.employees) {
        totalDepartmentSalary += calculateEmploeeSalary(employee);
     }
     return totalDepartmentSalary;
    }

    //Function to calculate total salary for all Departments
    function calculateCompanySalary(company){
        let totalCompanySalary = 0;
        for (let department of company.departments){
            totalCompanySalary += calculateDepartmentSalary(department);
        }
        return totalCompanySalary;
        }


