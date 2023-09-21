const employees = [
  {
    name: "Michael Scott",
    department: "Management",
  },
  {
    name: "Dwight Schrute",
    department: "Sales",
  },
  {
    name: "Jim Halpert",
    department: "Sales",
  },
  {
    name: "Pam Beesly",
    department: "Admin",
  },
  {
    name: "Angela Martin",
    department: "Accounting",
  },
  {
    name: "Kevin Malone",
    department: "Accounting",
  },
  {
    name: "Andy Bernard",
    department: "Sales",
  },
  {
    name: "Oscar Martinez",
    department: "Accounting",
  },
];

const sales = employees.filter((employee) => employee.department === "Sales");
console.log(sales);
const accounting = employees.filter(
  (employee) => employee.department === "Accounting",
);
console.log(accounting);
