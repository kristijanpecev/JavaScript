/*let myString = "I love JavaScript";

function replaceVowels(str) {
    let myLowerCaseString = str.toLowerCase();
    let myVowelArray = ["a", "e", "i", "o", "u"];

    myVowelArray.forEach((element, index) => {
        myLowerCaseString = myLowerCaseString.replaceAll(element, index);

    });
    return myLowerCaseString;
}   

console.log(replaceVowels(myString));

console.log("------------------------");


let num = 24.44563;
let myString = "sazd";


console.log(num.toFixed(3));
console.log(Math.sqrt());
console.log();

let round = Math.round(5.7);
let round2 = math.round(5.4);

console.log("Ceil: ", ceil);
console.log("floor: ", floor);
console.log("Round: ", round);
console.log("Round2: ", round2);

console.log();*/

let myDate = new Date();

let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayOfWeekArray = ["Mon", "Tue", "Wed", "Thu", "Friday", "Sat", "Sun"];

let date = myDate.getDate();
let month = myDate.getMonth();
let year = myDate.getFullYear();
let dayOfWeek = myDate.getDay();
let 