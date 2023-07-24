"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var person = /** @class */ (function () {
    function person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    person.prototype.printname = function () {
        return this.name;
    };
    person.prototype.yearofbirth = function (currentyear) {
        return currentyear - this.age;
    };
    person.prototype.setaddress = function (newaddress) {
        this.address = newaddress;
    };
    person.prototype.getaddress = function () {
        return this.address;
    };
    return person;
}());
exports.person = person;
