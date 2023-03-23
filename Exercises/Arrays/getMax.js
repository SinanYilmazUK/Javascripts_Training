const numbers = [1,2,3,4,5,6]

const max = getMax(numbers);

console.log(max);

function getMax(array){
    if(array.length === 0 ) return undefined;

    return array.reduce((accumulator, current) =>{
        return (current > accumulator) ? current : accumulator;
    });
    // array.reduce((accumulator, current) =>(current > accumulator) ? current : accumulator);
}