const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
  ];

  function filterAdults(users) {
    return users.filter(user => user.age >= 18);
  }

  function mapUserNames(users) {
    return users.map(user => user.name);
  }

  function groupUsersByCity(users) {
    return users.reduce((result, user) => {
      if (!result[user.city]) {
        result[user.city] = [];
      }
      result[user.city].push(user);
      return result;
    }, {});
  }

  console.log("Filtered Adults:", filterAdults(users)); 

  
  console.log("Mapped User Names:", mapUserNames(users)); 

  
  console.log("Grouped Users by City:", groupUsersByCity(users)); 