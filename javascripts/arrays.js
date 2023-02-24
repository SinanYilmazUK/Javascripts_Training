let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors); //['red', 'blue', 1]

//map() => Returns a new array with the results of calling a provided function on every element in this array.
const list = [1, 2, 3, 4, 5, 2];
let newValues = list.map((newValue) => newValue * 2);
console.log(newValues); // [2, 4, 6, 8, 10]

//filter() => Returns a new array with all elements that pass the test implemented by the provided function.
newValues = list.filter((num) => num % 2 == 0);
console.log(newValues); //[2, 4]

//reduce() => Reduce the array to a single value.
newValues = list.reduce((total, item) => total+item,0);
console.log(newValues); //15

//reduceRight() => single output value(from right to left).
newValues = list.reduceRight((total, item) => total+item,0);
console.log(newValues); //15

//fill() => Fill the elements in an array with a static value.
//console.log(list.fill(0)); //[0, 0, 0, 0, 0]

//find() => Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
newValues = list.find((num) => num == 4); 
console.log(newValues); //4
newValues = list.find((num) => num == 8);
console.log(newValues); // undefined

//indexOf()
console.log(list.indexOf(3)); // 2

//lastIndexOf()
console.log(list.lastIndexOf(2)) // 5

//includes()
console.log(list.includes(5)); // true
console.log(list.includes(8)); // false

//pop() => Removes the last element from an array and returns that element.
console.log(list.pop()); // 2
console.log(list); // [1, 2, 3, 4, 5]

//push() => Appends new elements to the end of an array, and returns the new length.
console.log(list.push(6)); // 6 -array length
console.log(list); // [1, 2, 3, 4, 5, 6]

//shift() => Removes the first element from an array and returns that element.
console.log(list.shift()); // 1
console.log(list); // [2, 3, 4, 5, 6]

//unshift() => Adds new elements to the beginning of an array, and returns the new length.
console.log(list.unshift(0)); // 6
console.log(list); // [0, 2, 3, 4, 5, 6]

//Array.splice() => Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(list.splice(1,2)); // [2, 3]
console.log(list);  // [0, 4, 5, 6]

//Array.slice() =>  The original array will not be modified.
console.log(list.slice(1,3)); // [4, 5]
console.log(list); // [0, 4, 5, 6]

//Array.join() => Joins all elements of an array into a string.
console.log(list.join(",")); // 0,4,5,6

//Array.reverse() => Reverses the order of the elements in an array.
console.log(list.reverse()); // [6, 5, 4, 0]

//Array.sort()
console.log(list.sort()); // [0, 4, 5, 6]

//Array.every() => Returns true if all elements in the array pass the test implemented by the provided function.
console.log(list.every((num) => num % 2 == 0)); //false

//Array.some() => Returns true if all elements in the array pass the test implemented by the provided function.
console.log(list.some((num) => num % 2 == 0)); //true

//Array.of() => Creates a new array with a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of(1,2,3,4,5,6,7,8,9)); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Array.isArray()
const number = 5;
console.log(Array.isArray(list)); // true
console.log(Array.isArray(number)); // false

//Array.at() => Returns a value at the specified index.
console.log(list.at(-1)); // 6
console.log(list.at(-2)); // 5


