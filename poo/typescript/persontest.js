"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var persona1 = new person_1.person("omar", 19, "calle elvalle 9");
console.log(persona1.printname());
console.log(persona1.yearofbirth(2023));
console.log(persona1.getaddress());
persona1.setaddress("calle sol 20");
console.log(persona1.getaddress());
