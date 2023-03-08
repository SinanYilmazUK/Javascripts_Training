let usercolor = "red"
let defaultcolor = "blue"
let currentColor = usercolor || defaultcolor

console.log(currentColor); //red

console.log(false || 1 || 2 ); // 1