'use strict';// Temporarily disabled for debugging.

function logger() {
 console.log('My name is Phill');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
 console.log(apples, oranges);
 const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
 return juice; // KEYWORD used in functions to specify the value. 
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const apple0rangeJuice = fruitProcessor(7, 11);
console.log(apple0rangeJuice);
//My experiment 
//  function pizzaProcessor(chees, meat, vegitables) {
//   const pizza = `I would like ${chees} pizza with meat ${meat} and also ${vegitables} vegitables pizzas`;
//   return pizza;
//  }

//  const pizzaDelivery = pizzaProcessor(2, 4, 1);
//  console.log(pizzaDelivery);