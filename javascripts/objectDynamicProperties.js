const circle = {
  radius: 1,
};

circle.color = "red";
circle.draw = function () {
  console.log("draw");
};
console.log(circle.color); // red
delete circle.color;
console.log(circle); //{radius: 1, draw: ƒ}