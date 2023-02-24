const Person = require("./class")
class Pet extends Person{

    get location(){
        return "BlueCross"
    }

    constructor(firstName,lastName){
        //call parent class constructor
        super(firstName,lastName);
    }
}
let pet = new Pet("Sam","san")
console.log(pet.fullName());
console.log(pet.location);