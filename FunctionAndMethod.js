// Arrow Function

Multiply = (a,b) => a * b;
console.log(Multiply(5,7));


// IndexOf method

var index = [12,5,8,130,44].indexOf(130);
console.log(index);


// Concat method and toString method

var num = [1,2,3];
var num1 = [4,5,6];
var num2 = num.concat(num1);
console.log(num2);
console.log(num2.toString());


// Array.from method

let name = Array.from("Lovely")
console.log(name);


// Array.of and Array.length method

let name1 = Array.of(2,45,5,34)
console.log(name1);
console.log(name1.length);


// Array.copyWithin method

const a = [1,2,3,4,5,6,7,8,9,10];
const b = [1,2,3,4,5,6,7,8,9,10];
const c = [1,2,3,4,5,6,7,8,9,10];
console.log(a.copyWithin(1,3,5));
console.log(b.copyWithin(1,3));
console.log(c.copyWithin(1));


// Array.entries method

var colors = ["Red","Blue","Yellow","Black"];
var show = colors.entries();
for (i of show) {
    console.log(i);
}


// Array.keys method

var colors1 = ["Red","Blue","Yellow","Black"];
var show = colors1.keys();
console.log(...show);


// Map method

var num3 = [1,4,9];
var roots = num3.map(Math.sqrt);
console.log("roots is : "+roots);


// Array.find

const num4 = [3,5,3,7,8];
let first = num4.find(myFunction);
function myFunction(value,index,array) {
    return value > 7 ;
}
console.log(first);


