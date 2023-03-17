let address = createAddress("Holdich Street", "Peterborough", "AA11BB");
console.log(address); //{street: 'Holdich Street', city: 'Peterborough', postcode: 'AA11BB'}

//Factory function
function createAddress(street, city, postcode) {
  return {
    street,
    city,
    postcode,
  };
}

address = new Address("Holdich Street", "Peterborough", "AA11BB");
console.log(address); //Address {street: 'Holdich Street', city: 'Peterborough', postcode: 'AA11BB'} b

//Constructor function
function Address(street, city, postcode) {
  this.street = street;
  this.city = city;
  this.postcode = postcode;
}
