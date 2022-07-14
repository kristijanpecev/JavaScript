let input = prompt ("what is your age?");
console.log(input);

let age = Number(input);
let message;

if (age>=21) {
    message = "You can enter and drink alcohol!";
} else if (age>=16) {
    message = "You can enter but you cant drink alcohol";
} else {
    message = "You cant enter";
}

console.log(message);