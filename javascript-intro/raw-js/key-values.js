const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log(person.name); // Output: John
  console.log(person["age"]); // Output: 30
  
  person.job = "Developer"; // Add a new property
  console.log(person); // Output: {name: "John", age: 30, city: "New York", job: "Developer"}