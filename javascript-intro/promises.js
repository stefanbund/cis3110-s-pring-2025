fetch('data.csv') // 1. Initiate the fetch request
  .then(response => response.text()) // 2. Handle the response (as text)
  .then(csvData => { // 3. Use the CSV data
    console.log(csvData); // Example: Log the CSV data
    // ... further processing
  })
  .catch(error => console.error("Error fetching data:", error)); // Handle potential errors