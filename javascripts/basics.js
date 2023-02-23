const flag = true;

if (flag) {
  console.log("condition satisfied");
} else {
  console.log("condition not satisfied");
}

//ARRAY

var marks = Array(6);
var marks = new Array(10, 20, 30, 40, 50, 60);
var marks = [10, 20, 30, 44, 55, 66, 77];

console.log(marks[2]); //30
marks[3] = 14;
console.log(marks); // [10,20,30,14,55,66,77]
marks.push(65);
console.log(marks); //[10, 20, 30, 14, 55, 66, 77, 65]
marks.pop();
console.log(marks); //[10, 20, 30, 14, 55, 66, 77]
marks.unshift(12);
console.log(marks); //[12, 10, 20, 30, 14, 55, 66, 77]
console.log(marks.indexOf(55)); //5
console.log(marks.includes(120)); //false
submarks = marks.slice(2, 5);
console.log(submarks); //[20, 30, 14]

var sum = 0;
marks.forEach((element) => {
  console.log(element);
});

//reduce method
let total = marks.reduce((sum, totalMarks) => sum + totalMarks, 0);
console.log(total);

//filter method
var scores = [12, 13, 14, 16, 18, 19];

let newFilterEvenScores = scores.filter((score) => score % 2 == 0);
console.log(newFilterEvenScores);

//map method
let mapArray = newFilterEvenScores.map((score) => score * 3);
console.log(mapArray);

// All methods in just one line
let sumValues = scores
  .filter((scores) => scores % 2 == 0)
  .map((scores) => scores * 3)
  .reduce((sum, total) => sum + total, 0);

  console.log(sumValues);
  