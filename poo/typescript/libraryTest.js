"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./library");
var book_1 = require("./book");
var libro1 = new book_1.Book("Cien maners de amar", 187, "nª934", "Luis Angel Perez", "Argentina");
var libro2 = new book_1.Book("ley de vida", 190, "nª8573", "Jesus Sanchez", "vanezolana");
var libro3 = new book_1.Book("deseo de paz", 99, "nº 847k", "Juan Sanchez Mercado", "Republica Dominicana");
var libro4 = new book_1.Book("mentir con la verdad", 57, "nº864P", "Paloma Diaz Cruz", "Mexico");
var libreria = new library_1.Library([], "P7-F9", "Pain");
libreria.setBook([libro1, libro2, libro3, libro4]);
console.log(libreria.findByAuthor("Victor Cruz"));
console.log(libreria.setAddress("bembibre"));
console.log(libreria.setManager("Obito"));
console.log(libreria.getNumberOfBooks());
