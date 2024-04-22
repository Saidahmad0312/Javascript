// class Person {
//     constructor(name, age, jobTitle) {
//       this.name = name;
//       this.age = age;
//       this.jobTitle = jobTitle;
//     }
  
//     introduce() {
//       console.log(`Assalomu alaykum, men ${this.name}. ${this.age} yoshdaman va ${this.jobTitle} lavozimida ishlayman.`);
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age) {
//       super(name, age, "Talaba");
//     }
//   }
  
//   class Employee extends Person {
//     constructor(name, age) {
//       super(name, age, "Ishchi");
//     }
//   }
  
//   let student1 = new Student("Ali", 20);
//   let employee1 = new Employee("Vali", 30);
  
//   student1.introduce(); 
//   employee1.introduce();
  
//   console.log(student1 instanceof Person);
//   console.log(employee1 instanceof Person);
  






// function greetWith(name, greetFunction) {
//     const message = greetFunction(name);
//     console.log(message);
//   }
//   function greetHello(name) {
//     return `Salom Dunyo ${name}!`;
//   }

//   function greetHi(name) {
//     return `Salom ${name}!`;
//   }
//   greetWith("Ali", greetHello);
//   greetWith("Amirbek", greetHi);







//   function parseJSON(jsonString) {
//     try {
//       return JSON.parse(jsonString);
//     } catch (error) {
//       console.error("JSON xatosi: ", error.message);
//       return null;
//     }
//   }
  
//   let invalidJSON = '{ "name": "John", "age": }';
  
//   let parsedData = parseJSON(invalidJSON);
//   if (parsedData !== null) {
//     console.log("JSON ma'lumotlari: ", parsedData);
//   } else {
//     console.log("Xatolik yuz berdi.");
//   }
  
//

// function delay(ms) {
//     return new Promise(resolve => {
//       setTimeout(resolve, ms);
//     });
//   }
  
//   delay(2000)
//     .then(() => {
//       console.log("Hello, Promises");
//     })
//     .catch(error => {
//       console.error("Xatolik: ", error);
//     });