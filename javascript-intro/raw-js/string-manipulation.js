const csvString = "Month,Sales\nJanuary,150\nFebruary,220";
const lines = csvString.split('\n');
console.log(lines); // Output: ["Month,Sales", "January,150", "February,220"]

const headers = lines[0].split(',');
console.log(headers); // Output: ["Month", "Sales"]

const values = lines[1].split(',');
console.log(values); // Output: ["January", "150"]