let myPerson = require("./person")
 

let persona2 = new myPerson.Person(190,98,1990)
console.log(persona2.imc());
console.log("Tu edad es: "+ persona2.calcularEdad());
console.log(persona2.printAll());
console.log(persona2.printHobbies());