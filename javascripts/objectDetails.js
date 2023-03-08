//Object-oriented Programming (OOP)
//1th way to declare an object
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw(); //method

//2th way to declare an object
//factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(3);
console.log(circle2);

//Constructor Function
function Circle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const myCircle = new Circle(1);
console.log(myCircle);

