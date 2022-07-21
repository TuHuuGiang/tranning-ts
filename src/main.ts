import './style.css'
// import { countries } from './country';
// import { webTechs } from './web_techs';


const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h2>Tranning TS</h2>
`
//1. Declare an empty array
let arrEmpty: unknown = [];
console.log('arrEmpty:', arrEmpty)

console.log('----------------------------------------------------');

//2. Declare an array with more than 5 number of elements
let arrNumber: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log('arrNumber:', arrNumber)

console.log('----------------------------------------------------');

//3. Find the length of your array (2)
let lengthArrNumber: number = arrNumber.length;
console.log('lengthArrNumber:', lengthArrNumber)

console.log('----------------------------------------------------');

//4. Get the first item, the middle item and the last item of the array (2);
let firstItem: number = arrNumber[0];
let middleItem = arrNumber[Math.floor(arrNumber.length / 2)];
let lastItem: number = arrNumber[arrNumber.length - 1]
console.log('firstItem:', firstItem);
console.log('middleItem:', middleItem);
console.log('lastItem:', lastItem);

console.log('----------------------------------------------------');

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes: any[] = [1, '2', {}, [4], undefined, null];
console.log('mixedDataTypes:', mixedDataTypes.length);

console.log('----------------------------------------------------');

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies: string[] = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7. Print the array using console.log()
console.log('itCompanies:', itCompanies);

console.log('----------------------------------------------------');

//8. Print the number of companies in the array
console.log('Number of companies:', itCompanies.length);

console.log('----------------------------------------------------');

//9. Print the first company, middle and last company
let firstCompany: string = itCompanies[0];
let middleCompany: string = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany: string = itCompanies[itCompanies.length - 1];
console.log('firstCompany:', firstCompany);
console.log('middleCompany:', middleCompany);
console.log('lastCompany:', lastCompany);

console.log('----------------------------------------------------');

//10. Print out each company
for(let company of itCompanies) {
    console.log('Company:', company)
}

console.log('----------------------------------------------------');

//11. Change each company name to uppercase one by one and print them out
for(let company of itCompanies) {
    console.log('Company name to uppercase:', company.toUpperCase())
}

console.log('----------------------------------------------------');

// //12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
// let itCompaniesCopy: string[] = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// itCompaniesCopy.splice(6, 1);
// itCompaniesCopy[itCompaniesCopy.length - 2] = 'Oracle và Amazon';
