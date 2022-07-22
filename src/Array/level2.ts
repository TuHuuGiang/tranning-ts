import {countries} from "./countries";
import {webTechs} from "./web_techs";

//1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js
// and store the webTechs array into this file. Access both file in main.js file
import {countries} from "../countries";
import {webTechs} from "../web_techs";

console.log('Countries:', countries);
console.log('Web techs:', webTechs);

//2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let delDot: string = text.split('.').join('');
let delComma: string = delDot.split(',').join('');
console.log('Way 1:', delComma.split(' '));

console.log('Way 2:', text.replace(/[,.]/g, '').split(' '));

console.log('----------------------------------------------------');

//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart)
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);
// remove 'Honey' if you are allergic to honey
let findHoney = shoppingCart.filter(name => name !== 'Honey');
console.log(findHoney);
// modify Tea to 'Green Tea'
let findIndex = shoppingCart.findIndex(name => name === 'Tea');
shoppingCart[findIndex] = 'Tea Green';
console.log(shoppingCart)

console.log('----------------------------------------------------');

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add
// to the countries list.
if(countries.filter(name => name.toLowerCase() === 'ethiopia').length > 1) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}
console.log(countries);

console.log('----------------------------------------------------');

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it
// does not exist add Sass to the array and print the array.
if(webTechs.filter(name => name.toLowerCase() === 'sass').length > 1) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Scss');
}
console.log(webTechs);

//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

console.log('Way 1:', [...frontEnd, ...backEnd]);
console.log('Way 2:', frontEnd.concat(backEnd));

console.log('----------------------------------------------------');