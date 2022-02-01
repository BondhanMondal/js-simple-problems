const business = 1450;
const minister = 1550;
const army = 600;
// if(business > minister){
//     console.log('business is bigger');

// }
// else{
//     console.log('minister is bigger');
// }

//compare three
/*if (business > minister && business > army){
    console.log('business is bigger');
}
else if (minister > business && minister > army){
    console.log('minsiter is bigger');
}
else{
    console.log('Army is bigger');
}*/

var max = Math.max(business, minister, army);
console.log('largest is : ', max);


//solve task1: find largest between three numbers