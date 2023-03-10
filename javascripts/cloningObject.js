const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//*First way to clone
const another = {};
for (let key in circle) {
  another[key] = circle[key];
}
console.log(another); //{radius: 1, draw: ƒ}

//*Second way to clone
const another2 = Object.assign({}, circle);
console.log(another2); //{radius: 1, draw: ƒ}

//*Third way to clone
const another3 = { ...circle }; //Spread operator
console.log(another3); //{radius: 1, draw: ƒ}
