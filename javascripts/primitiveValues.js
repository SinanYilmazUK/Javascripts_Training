let x = 10;
let y = x;
x = 20;
console.log(x); //20
console.log(y); //10

let x2 = { value: 10 }
let y2 = x2;
x2.value = 20;

console.log(x2.value); //20
console.log(y2.value); //20

//***********/
let x3 = 10;

function increment(number){
    number++;
}

increment(x3);
console.log(x3); //10

//***********/

let x4 = {value:10}
function increment (obj){
obj.value++;
}
increment(x4);
console.log(x4.value) //11