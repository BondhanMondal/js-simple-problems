const numbers = [44, 23, 34, 32, 54, 5, 78]
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}
console.log('Sum is: ', sum);

function arrayTotal (numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([20,20,20]);
console.log('Total: ', total);