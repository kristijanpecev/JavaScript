/*function Funkc(par1) {
    console.log(par1);
}
Funkc(2);
Funkc(4);
Funkc("Jkl");


function funkc(p1, p2) {
    if (typeof p1 == "number" && typeof p2 == "number") {
       console.log(p1 * p2);
    } else {
        console.log("Invalid");
    }
    
}

funkc(2, 4);
funkc(5, 4);
funkc("g", 4);



function EvenOdd(par) {
    if (par % 2 === 0) {
        console.log(par, "Is Even!");
    } else {
        console.log(par, "Is Odd!");
    }
}

EvenOdd(3);
EvenOdd(6);
EvenOdd(2);



function palindrome(par) {
    let parRev = par.split("").reverse().join("");
    if (parRev === par) {
        
        console.log(par, "Is palindrome");
    } else {
        console.log(par, "Not a palindrome");
    }
    
}
palindrome("madam");
palindrome("Kiko");



let array = [];
for (let i = 0; i < 10; i++) {
    let result = ModCalc(i *5, i * i);
    array.push(result);
}

function ModCalc(par1, par2) {
    return par1 + par2
}

console.log(array);


function getRecursive(nr) {
    console.log("Started function", nr);
    if (nr>0) {
        getRecursive(nr - 1);
    } else {
        console.log("done with recursion");
    }
    console.log("Ended function");
}

getRecursive(3);*/

function CalcFactorial(num) {
    console.log(num);
    if (num === 0) {
        return 1;
    } else {
        let result = num * CalcFactorial(num -1);
        console.log(result);
        return result;
       }

}

CalcFactorial(5);