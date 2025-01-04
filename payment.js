// Object containing employee data
let employees = [
    {  Name: "Story", Amount: "per week-59/-,per month-199/-,per year-1299/-" },
    {  Name: "Music", Amount: "per week-69/-,per month-259/-,per year-1499/-" },
    {  Name: "Boardcast", Amount: "per week-99/-,per month-599/-,per year-2999/-"},
    {  Name: "Article", Amount: "per week-99/-,per month-599/-,per year-2999/-" }
];

// Function to create a table from an array of objects
function createTable(data) {
    // Get the table element from the DOM
    let table = document.getElementById("payment-table");

    // Create the table header row
    let header = table.createTHead();
    let headerRow = header.insertRow();
    Object.keys(data[0]).forEach(key => {
        let cell = headerRow.insertCell();
        cell.textContent = key.charAt(0).toUpperCase() + key.slice(1);  // Capitalize first letter
    });

    // Create the table body
    let tbody = table.createTBody();
    data.forEach(employee => {
        let row = tbody.insertRow();
        Object.values(employee).forEach(value => {
            let cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

// Call the function to create the table
createTable(employees);