/*class Dog {
    constructor(par1, par2, par3, par4) {
        this.dogname = par1;
        this.weight = par2;
        this.color = par3;
        this.breed = par4;
    }
    dogDiscription() {
        console.log("Name", this.dogname, "Weight", this.weight, "Breed", this.breed);
    }
}

let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
dog.dogDiscription()


//console.log("------------------------------");

class Person {
    constructor(par1, par2){
        this.FirstName = par1;
        this.LastName = par2;
    }
}
let person = new Person("Kristijan", "Pecev");
console.log(person);
let person2 = new Person("Angel", "Angelov");
console.log("Hello", person, person2);


class Person {
    constructor (firstName, lastName) {
        this.firstname = firstName;
        this.lastname = lastName;
    }
    fullName() {
        return this.firstname + " " + this.lastname;
    }
}

let person = new Person ("Kristijan", "Pecev");
let person2 = new Person ("Angel", "Angelov");

console.log("Hello", person.fullName());
console.log("Hello", person2.fullName());


class Animal {
    constructor(species, sound) {
       this.species = species;
       this.sound = sound;
    }
    
    printAnimal() {
       console.log(this.species, "makes this sound: ", this.sound);
    }
 }

 Animal.prototype.printFlying = function () {
    switch (String(this.species).toLowerCase()) {
       case "cow":
          console.log(this.species,"can't fly");
          break;
       case "owl":
          console.log(this.species, "fly");
          break;
    }
 }

 let cow = new Animal("Cow", "Muuuuu");
 let owl = new Animal("Owl", "Ou Ou!");

 cow.printAnimal();
 cow.printFlying();

 owl.printAnimal();
 owl.printFlying();*/


