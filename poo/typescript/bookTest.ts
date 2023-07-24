import { Book } from "./book";
let Datos = new Book("El ultimo dia de paz", 325, "2344433 - BC23333", "Victor cubre", "guerra")
console.log(Datos.tostring());
console.log("============================");
console.log(Datos.printTitle())
console.log("============================");
console.log(Datos.printnPages());
console.log("============================");
console.log(Datos.printlsbn());
console.log("============================");
console.log(Datos.printAuthor());
console.log("============================");
console.log(Datos.printEditorial());




