//falsy
//undefined
//null
//''
//false
//0
//NaN

const array = [0, 1, 2, 3, null, undefined];

console.log(countThuthy(array)); //3

function countThuthy(array) {
  let count = 0;
  for (let value of array) 
    if (value) 
        count++;
  return count;
}
