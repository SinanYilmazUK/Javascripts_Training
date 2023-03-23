const number = [1, 2, 3, 4];

const output = move(number, 1, 2);

console.log(output); //[1, 3, 4, 2]

function move(array, index, offset) {
  const position = index + offset;
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}