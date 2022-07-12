// Exercise 1.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log( character );

// Exercise 1.2
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`)

// Exercise 1.3

const toy1 = {
    name: 'Buss myYear',
    price: 19,
};

const toy2 = {
    name: 'Rallo mcKing',
    price: 29,
}
console.log( toy1.price + toy2.price);

// Exercise 1.4

let globalBasePrice = 25000;
const car1 = {
    name: 'BMW m&m',
    basePrice: 50000,
    finalPrice: 60000,
}

const car2 = {
    name: 'Chevrolet Corbina',
    basePrice: 70000,
    finalPrice: 80000,
}

car1.finalPrice = globalBasePrice + car1.basePrice;
console.log( car1 );
car2.finalPrice = globalBasePrice + car2.basePrice;
console.log( car2 );