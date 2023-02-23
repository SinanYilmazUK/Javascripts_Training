

//sorting String Array
let fruits=["banana","apple","mango","pomegrante"];
fruits.sort();
console.log(fruits); //['apple', 'banana', 'mango', 'pomegrante']
fruits.reverse();
console.log(fruits); //['pomegrante', 'mango', 'banana', 'apple']

//sorting numbers is not liable
var scores = [12,003,19,16,14]
scores.sort();
console.log(scores); //[12, 14, 16, 19, 3]

//Bubble sorting
console.log(scores.sort((a,b)=>a-b));//[3, 12, 14, 16, 19]

