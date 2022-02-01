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
//solve task1: find smallest between three numbers


/// Quiz Problems

/* const number = -78;
const answer = Math.abs(number);
console.log(answer);

var a = 2;
var b = 3;
if (a<b) { 
    console.log('hello'); 
}
var c = 12.96;
console.log(Math.floor(c));

function add(a, b) {
    return a + b;
}
console.log(add("adam" + "eve"));

let nm = 'bondhan';
const out = nm.length;
console.log(out);

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if (letter == 'a'){
        count++;
    }
}
console.log(count); */