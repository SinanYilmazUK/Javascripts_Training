
const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  set fullName(value) {
    if (typeof value !== "string") 
        throw new Error("Value is not a string.");
    const parts = value.split(" ");
    if (parts.length !== 2) 
        throw new Error("Enter a firstname and lastname");
    this.firstName = parts[0];
    this.firstName = parts[1];
  },
};

try {
  person.fullName = "";
} catch (e) {
  console.log(e);
}
console.log(person);
