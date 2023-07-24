"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts_1 = require("./contacts");
var person_1 = require("./person");
var persona3 = new person_1.person("omar", 19, "calle bimbim 9");
var contacto = new contacts_1.contacts();
contacto.people.push(persona3);
console.log(contacto.printcalendar());
