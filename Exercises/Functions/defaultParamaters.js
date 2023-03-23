function interest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5)); //1750

// Deafult parameter
function interest2(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest2(10000)); //1750

//What if a normal parameter comes after the default parameter
function interest3(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest3(10000, 5)); //NaN

// ***We should defined something at second index in order to
function interest4(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest4(10000, undefined, 5)); // 1750