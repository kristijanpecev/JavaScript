/*function logName() {
    console.log("Boban");
}

function logNameWithParams(ime) {
    console.log(ime);
}

// -------------------------------------------//

// Varijabla sto zacuvuva broj na minuti

// Kreirame funkcija koja prima eden parametar
// PR. function imeNaFunkcija (parametar) {
// }

// Vo samata funkcija kreirajte varijabla sto bi go zacuvala rezultatot
// Samiot rezultat e parametarot / 60

// Napravete return na samata varijabla so rezultatot

// Treba da se povika samata funkcija so zacuvanata prva varijabla kako argument
// PR. function imeNaFunkcija(argument);

// Povikuvanjeto na funkcijata treba da bide vrapnato vo console.log()
// PR. console.log(imeNaFunkcija(argument));


let min = 323;

function minInHr(hr) {
    result = hr / 60;
    return result;
}

console.log(minInHr(min));


let arrOfCountries = ["Australia", "Germany", "USA", "Ukraine", "Macedonia", "Montenegro"];

function longestCountryName(arr) {
    let longName = "";
    if (typeof arr === "object" && arr.length > 0) {
        for (let i = 0; i <arr.length; i++) {
            const element = arr[i];
            if (longName === "") {
                longName = element;
            }else if (longName.length < element.length) {
                longName = element;
            }
        }
        return longName
    }  else {
      return longName;
   }

}

let longestName = longestCountryName(arrOfCountries);
console.log(longestName, longestName.length);

   
// Create a basic calculator

let x = 12;
let y = 10;
let operator = '*';


function basicCalculator(par1, par2, par3) {
    console.log("par1 is " + par1, "The type is" + typeof par1);
    console.log("par2 is " + par2, "The type is" + typeof par2);
    console.log("par3 is " + par3, "The type is" + typeof par3);

    if (par3 === '*') {
        let result = par1 * par2;
        console.log("The operation is multiplication", `${par1} ${par3} ${par2}`, "= " + result);
    }else if (par3 === '+') {
        let result = par1 + par2;
        console.log("The operation is sum", `${par1} ${par3} ${par2}`, "= " + result);

    }
}

basicCalculator(x, y, operator);

function getRecursive(num) {
    console.log(num);
    if (num > 0) {
        getRecursive(--num);
    }
    console.log('End of call', num);
}

getRecursive(3);


function logRecursive(nr) {
    console.log("Started function", nr);
    if (nr > 0) {
        logRecursive(nr - 1);
    } else {
        console.log("done with recursion");
    }
    console.log("Ended function", nr);
}
logRecursive(5);*/


let arr = [1, 2, 3, 4, 5, 6];

arr.reverse();

function reverseArr(arr1) {
    let reverseArr = [];

    for (let i = arr1.length - 1; i >= 0; i--){
        reverseArr.push(arr1);
       
    }
}