// employeeManager.js
const readline = require('readline');

// Interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store employees
let employees = [];

// Function to show menu options
function showMenu() {
  console.log(`
=========================
 Employee Management CLI
=========================
1. Add Employee
2. List Employees
3. Remove Employee
4. Exit
`);
  rl.question('Choose an option (1-4): ', handleMenuChoice);
}

// Handle user’s menu selection
function handleMenuChoice(choice) {
  switch (choice.trim()) {
    case '1':
      addEmployee();
      break;
    case '2':
      listEmployees();
      break;
    case '3':
      removeEmployee();
      break;
    case '4':
      console.log('Exiting... Goodbye!');
      rl.close();
      break;
    default:
      console.log('Invalid choice. Please enter 1-4.');
      showMenu();
  }
}

// Add employee
function addEmployee() {
  rl.question('Enter employee name: ', (name) => {
    rl.question('Enter employee ID: ', (id) => {
      employees.push({ name, id });
      console.log(`✅ Employee added: ${name} (ID: ${id})`);
      showMenu();
    });
  });
}

// List all employees
function listEmployees() {
  if (employees.length === 0) {
    console.log('No employees found.');
  } else {
    console.log('\n📋 Employee List:');
    employees.forEach((emp, index) => {
      console.log(`${index + 1}. ${emp.name} (ID: ${emp.id})`);
    });
  }
  showMenu();
}

// Remove employee by ID
function removeEmployee() {
  rl.question('Enter employee ID to remove: ', (id) => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      console.log(`🗑️ Employee removed: ${employees[index].name} (ID: ${employees[index].id})`);
      employees.splice(index, 1);
    } else {
      console.log('❌ Employee not found.');
    }
    showMenu();
  });
}

// Start the app
showMenu();
