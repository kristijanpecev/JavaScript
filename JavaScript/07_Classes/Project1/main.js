class Person {
    constructor(firstname, lastname, yearsWorked) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.yearsWorked = yearsWorked;
    }

}
let arrayOfArrays = [];


let person1 = new Person("Kristijan", "Pecev", 3);
let person2 = new Person("Angel", "Angelov", 5);
let person3 = new Person("Boban", "Srezovski", 2);

arrayOfArrays.push(person1, person2, person3);

Person.prototype.bio = function () {
    return this.firstname + " " + this.lastname + " Worked for " + this.yearsWorked + " years";
}

console.log(person1.bio()); 
console.log(person2.bio()); 
console.log(person3.bio()); 