import { person } from "./person";

let persona1: person = new person("omar",19,"calle elvalle 9")

console.log(persona1.printname());
console.log(persona1.yearofbirth(2023));
console.log(persona1.getaddress());
persona1.setaddress("calle sol 20")
console.log(persona1.getaddress());



