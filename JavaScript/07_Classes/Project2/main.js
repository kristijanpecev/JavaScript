class MenuItems {
    #burger = 180;
    #pica = 230;
    constructor(amountPicas, amountBurgers) {
        this.amountPicas = amountPicas;
        this.amountBurgers = amountBurgers;
    }
    calculatePrice() {
        let sumOfBurgers = this.amountBurgers * this.#burger;
        let sumOfPicas = this.amountPicas * this.#pica;
        let sum = sumOfBurgers + sumOfPicas;
        return sum;
    }
    get Price() {
        return this.calculatePrice();
    }
}


let order1 = new MenuItems(6, 2);
let order2 = new MenuItems(8,3);
let order3 = new MenuItems(4,6);

console.log("Total Price of first order is ", order1.Price);
console.log("Total Price of second order is ", order2.Price);
console.log("Total Price of third price is ", order3.Price);