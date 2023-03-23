const list = [0, 4, 5, 6];

console.log(list.splice(1, 2, "a", "b")); // [4, 5]
console.log(list); // 0,a,b,6

let found = list.find(function (element) {
  return element >= 5;
});
console.log(found); //6 return first element which meets the function

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

const course = courses.find((course) => course.name === "a");
console.log(course); //{id: 1, name: 'a'}

let numbers = [1, 2, 3, 4, 5, 6];
let another = numbers;

// 3 differerent ways to make an array empty
numbers = [];
numbers.length = 0;
numbers.splice(0, numbers.length);

//combining two arrays with spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined); // [1, 2, 3, 4, 5, 6]
const copy = [...first, "a", ...second, "b"];
console.log(copy); // [1, 2, 3, 'a', 4, 5, 6, 'b']

copy.forEach((number, index) => console.log(index, number));

//sorting Array & comparision
courses.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
