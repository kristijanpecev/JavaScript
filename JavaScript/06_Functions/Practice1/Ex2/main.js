/*function Sum(par1, par2) {
    return par1 + par2;
    
}

Sum();
console.log(Sum(1, 2));
console.log(Sum(2, 6));
console.log(Sum(8, 3));

function logInConsole(parametar, parametar2) {
    console.log(parametar + ":" + parametar2);
}
logInConsole("Test 1");
logInConsole("Test 2");
logInConsole("Test 3");
logInConsole("Test 4");*/

let array = ["beautiful", "smart", "strong", "convenient"];
let randomNumber = Math.floor(Math.random() * 4);

function describeMe() {
    let pr = prompt("Whats your name?");
    console.log(pr, "is", array[randomNumber]);    

}
describeMe();