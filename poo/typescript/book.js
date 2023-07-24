"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.printTitle = function () {
        return "El titulo del libro es: ".concat(this.title);
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.setnPages = function (nPages) {
        return this.nPages = nPages;
    };
    Book.prototype.printnPages = function () {
        return "El num de paginas del libro es: ".concat(this.nPages);
    };
    Book.prototype.getlsbn = function () {
        return this.isbn;
    };
    Book.prototype.setlsbn = function (isbn) {
        return this.isbn = isbn;
    };
    Book.prototype.printlsbn = function () {
        return "El ISBN es: ".concat(this.isbn);
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (author) {
        return this.author = author;
    };
    Book.prototype.printAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (editorial) {
        return this.editorial = editorial;
    };
    Book.prototype.printEditorial = function () {
        return "La editorial del libro es: ".concat(this.editorial);
    };
    Book.prototype.tostring = function () {
        return "\n    Title - ".concat(this.title, " \n    Number of Pages - ").concat(this.nPages, " \n    ISBN - ").concat(this.isbn, "\n    Author - ").concat(this.author, "\n    Editorial - ").concat(this.editorial, " ");
    };
    return Book;
}());
exports.Book = Book;
