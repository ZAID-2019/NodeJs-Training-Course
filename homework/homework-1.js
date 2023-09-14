// Write a JavaScript function that reads student information
// from an Excel file and gives back the details of a single student.

// Import the xlsx library and assign it to the 'reader' variable
const reader = require("xlsx");

// Read an Excel file located at the specified path and store it in 'excelFile' variable
const excelFile = reader.readFile(
  "C:/Users/LENOVO/Desktop/NodeJS/NodeJs-Training-Course/homework/NodeJsCourse.xlsx"
);

// Initialize an empty array called 'data' to store the Excel data
let data = [];

// Get the names of the sheets within the Excel file and store them in the 'sheets' variable
const sheets = excelFile.SheetNames;

// Iterate through each sheet in the Excel file
for (let i = 0; i < sheets.length; i++) {
  // Convert the current sheet to a JSON object and store it in 'temp'
  const temp = reader.utils.sheet_to_json(
    excelFile.Sheets[excelFile.SheetNames[i]]
  );
  // Iterate through each row in 'temp' and push it into the 'data' array
  temp.forEach((res) => {
    data.push(res);
  });
}

// Printing data
console.log({ data });

// Assuming the Student Email is in a column named 'Student Email'
if (sheets.length > 0 && sheets[0]["Student Email"]) {
  const firstName = sheets[0]["Student Email"];
  console.log(`The Student Email from Excel is: ${firstName}`);
} else {
  console.log("No data found in the specified sheet or column.");
}