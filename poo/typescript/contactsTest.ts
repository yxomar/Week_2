import { contacts } from "./contacts";
import { person } from "./person";


let persona3: person = new person("omar", 19, "calle bimbim 9")

let contacto:contacts = new contacts()
contacto.people.push(persona3)
console.log(contacto.printcalendar());

