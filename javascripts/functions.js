//block of code

function add(a, b) {
  return a + b;
}

let sum = add(2, 3);
console.log(sum);

//do not have name => Anyonymus function --function expressions
let sumOfInteger = function(c,d){
    return c+d;
}

let sumOfNumbers = (c,d) => c+d

console.log(sumOfNumbers(2,9));

//var --global level/functional level
//let --global level/block level {}

let greet = "morning";

if(1==1){
    let greet="afternoon";
}

function add(){
    let greet = "Evening";
}

console.log(greet); // morning
 
//*******************/
var greets = "morning";

if(1==1){
    var greets="afternoon";
}

function add(){
    var greets = "Evening";
}

console.log(greets); // morning