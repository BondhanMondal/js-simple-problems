function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
        
    }
    return largest;
}

const ages = [12, 54, 76, 34, 10, 32, 12];

const oldest = largestElement(ages);
const oldest2 = largestElement([-12, -6, -17])
console.log('Oldest Person: ', oldest);
console.log('Oldest2 Person: ', oldest2);


//find the smallest element of an array

function smallestElement(arr){
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        if (element < smallest){
            smallest = element;
        }
    }
    return smallest;
}

const smallestAge = smallestElement(ages);
console.log('Smallest Age: ', smallestAge);