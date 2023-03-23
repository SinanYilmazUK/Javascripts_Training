const numbers = [1, 2, 3, 4, 1, 2, 5];

const output = except(numbers, [1, 3]);

console.log(output); //[2, 4, 2, 5]

function except(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}
