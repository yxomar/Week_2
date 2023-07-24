import { Library } from "./library";
import { Book } from "./book";
let libro1 = new Book("Cien maners de amar", 187, "nª934", "Luis Angel Perez", "Argentina")
let libro2 = new Book("ley de vida", 190, "nª8573", "Jesus Sanchez", "vanezolana")
let libro3 = new Book("deseo de paz", 99, "nº 847k", "Juan Sanchez Mercado", "Republica Dominicana")
let libro4 = new Book("mentir con la verdad" , 57, "nº864P","Paloma Diaz Cruz", "Mexico")

let libreria = new Library([],"P7-F9","Pain")
libreria.setBook([libro1,libro2,libro3,libro4])
console.log(libreria.findByAuthor("Victor Cruz"));
console.log(libreria.setAddress("bembibre"));
console.log(libreria.setManager("Obito"));
console.log(libreria.getNumberOfBooks());

 