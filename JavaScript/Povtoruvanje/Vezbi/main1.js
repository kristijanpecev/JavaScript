/*let today = new Date();
  let day = today.getDay();
  let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

console.log('--------------------');

let today1 = new Date();
let day1 = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
console.log(day + "-" + month + "-" + year);
console.log(month + "-" + day + "-" + year);
console.log(month + "/" + day + "/" + year);
console.log(day + "/" + month + "/" + year);


console.log('--------------------');

for (let year = 2014; year <= 2050; year++)
    {
    const d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log(`1st January is being a Sunday  ${year}`);
    }
console.log('--------------------');

let Num = Math.ceil(Math.random() * 10);
let gNum = prompt("Guess the number!");
if (gNum == Num ) {
    console.log("You guessed the right number");
} else {
    console.log("Try again");
}


let date = new Date();
let chr = new Date(date.getFullYear(), 11, 25);
if (date.getMonth()==11 && date.getDate() > 25) {
    chr.setFullYear(chr.getFullYear()+1);
}

let day=1000*60*60*24;
console.log(`${Math.ceil((chr.getTime()-date.getTime())/(day))} days left until Christmas!`);

    
function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32));
console.log(difference(11));*/

let Num1 = Math.floor(Math.random() * 10); 
let Num2 = Math.floor(Math.random() * 10);
let Sum = Num1 + Num2;
let Sum1;
if (Num1 == Num2) {
    Sum1 = (Num1 + Num2) * 3;
    console.log(Sum1);
} else {
    console.log(Sum);
}


