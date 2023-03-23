const numbers = [1, 2, 3, 4, 5, 6, 1];

const count = countOccurence(numbers, 1);

console.log(count);

function countOccurence(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurance = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurance;
  }, 0);
}
