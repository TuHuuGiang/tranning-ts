// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
const getCountries = countries;
console.log('Coutries:', getCountries)
console.log('-------------------------');
const getWebtechs = webTechs;
console.log('Web Techs:', getWebtechs)
console.log('-------------------------');

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text: string = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const removeDot = text.split('.').join(' ');
const covertArr = removeDot.split(' ');
for (let i = 0; i < covertArr.length; i++) {
  if (covertArr[i] == '') {
    covertArr.splice(i, 1);
  }
}
console.log(`Array: ${covertArr}`);
console.log(`Length: ${covertArr.length}`);
console.log('-------------------------');

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
  console.log('Add Meat in the beginning of your shopping cart:', shoppingCart);
}
// add Sugar at the end of you shopping cart if it has not been already added
if(!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
  console.log('Add Sugar at the end of you shopping cart:', shoppingCart);
}
// remove 'Honey' if you are allergic to honey
let newcart: string[] = [];
if(shoppingCart.includes('Honey')) {
  newcart = shoppingCart.filter(name => name !== 'Honey');
  console.log('Remove Honey:', newcart);
}
// modify Tea to 'Green Tea'
const findIndexTea = newcart.findIndex(name => name === 'Tea');
newcart[findIndexTea] = 'Green Tea';
console.log('Modify Tea to Green Tea:', newcart);
console.log('-------------------------');

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.filter(coun => {
  if(coun === 'Ethiopia') {
    console.log('Country:', coun.toLocaleUpperCase());
  }
});
if(!countries.includes('Ethiopia')) {
  countries.push('Ethiopia');
  console.log('Coutries:', countries)
}
console.log('-------------------------');

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
} 
else {
  webTechs.push('Sass');
  console.log('WebTechs:', webTechs)
}
console.log('-------------------------');

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log('Fullstack:', fullStack);
console.log('-------------------------');