let myCont = require("./contacts")
let myPers = require("./person")

let personas = new myPers.Person(190,98,1990)
let contactos = new myCont.Contacts()

contactos.array.push(personas)
console.log(contactos.printPersons());