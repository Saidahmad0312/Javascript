const people = [
    { name: "Ali", birthYear: 1900, deathYear: 1980 },
    { name: "Abbos", birthYear: 1920, deathYear: 1995 },
    { name: "Hasan", birthYear: 1915, deathYear: 2005 },
    { name: "Amirbek", birthYear: 1905, deathYear: 1960 }
  ];
  
  function findOldestPerson(people) {
    let oldestPerson = people[0];
    
    for (let i = 1; i < people.length; i++) {
      if (people[i].deathYear - people[i].birthYear > oldestPerson.deathYear - oldestPerson.birthYear) {
        oldestPerson = people[i];
      }
    }
    
    return oldestPerson;
  }
  
  console.log(findOldestPerson(people));
  