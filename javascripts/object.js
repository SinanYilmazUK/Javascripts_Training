let person = {
  firstName: "Tim",
  lastName: "Joe", 
  age : 24,
  fullname :function(){
    console.log(this.firstName+this.lastName);
  }
};
console.log(person.fullname()); //TimJoe
console.log(person.lastName); // Joe
console.log(person["lastName"]); //Joe

person.firstName = "Tim Dane";
console.log(person.firstName); //Tim Dane
person.gender = "male";
console.log(person.gender); //male
console.log(person); //{firstName: 'Tim Dane', lastName: 'Joe', gender: 'male'}
delete person.gender;
console.log(person); //{firstName: 'Tim Dane', lastName: 'Joe'}

console.log("gender" in person); //false

for (let key in person) {
  console.log(person[key]);   
}
// Tim Dane
// Joe