module.exports = class Person {
  age = 25;
  //location = "Canada"
  get location() {
    return "Canada";
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //methods
  fullName() {
    console.log(this.firstName + this.lastName);
  }
};

// let person = new Person("Tim", "Joseph");
// let perosn1 = new Person("sinan", "Yilmaz");
// console.log(person.age);
// console.log(person.location);
// console.warn(person.fullName());
// console.warn(perosn1.fullName());
