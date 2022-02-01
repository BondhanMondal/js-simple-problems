// Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
/*
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
16th = 15th + 14th
nth = (n-1)th + (n-2)th

ith = (i-1)th + (i-2)th
*/

/* const fibo = [0, 1];
for (let i = 2; i <= 10; i++){
    // nth = (n - 1)th + (n - 2)th
    // ith = (i - 1)th + (i - 2)th
    fibo[i] = fibo[i - 1] + fibo[i - 2]

}
console.log(fibo); */

/* function fibonacciSeries(num){
    const fibo = [0, 1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const fibo10 = fibonacciSeries(10);
console.log(fibo10); */

function fibonacciSeries(num) {
    if(typeof(num) != 'number'){
        return 'Error!! please give a number';
    }
    if (num < 2){
        return 'Please Enter a Positive Number Grater than 1'
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fibo10 = fibonacciSeries(1);
console.log(fibo10);