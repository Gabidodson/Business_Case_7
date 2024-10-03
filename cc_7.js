//Creating a Department Structure
let company = {
    departments: [
        {
            departmentName: "Sales",
            employees: [
        {
name: "Scooby Doo", salary: 80000, subordinates: []
        },
        {
name: "Shaggy Rogers", salary: 60000, subordinates: []
        },
        {
name: "Velma Dinkley", salary: 100000, subordinates: []
        }
    ]
},
{
      departmentName: "Marketing",
      employees: [
        {
name: "Daffy Duck", salary: 50000, subordinates: [
    {
name: "Porky Pig", salary: 65000, subordinates: []
    },
    {
name: "Bugs Bunny", salary: 95000, subordinates:[]
    }
]
}
    ]  
},
{
    departmentName: "Finance",
    employees: [
        {
name: "Mickey Mouse", salary: 200000, subordinates:[
{
name: "Minnie Mouse", salary: 120000, subordinates:[]
},
{
name: "Daisy Duck", salary: 75000, subordinates: []
},
{
name: "Donald Duck", salary: 55000, subordinates: []
}
    ]
}
    ]
}

