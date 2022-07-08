// 1. Declare an empty array
const arrEmpty: any[] = [];
console.log('arrEmpty', arrEmpty)

// 2. Declare an array with more than 5 number of elements
const arrNumber: number[] = [21, 7, 2, 1, 24];
console.log('arrNumber', arrNumber);
console.log('-------------------------');

// 3. Find the length of your array (2)
const lengthArrNumber = arrNumber.length;
console.log('lengthArrNumber', lengthArrNumber);
console.log('-------------------------');

// 4. Get the first item, the middle item and the last item of the array (2)
const firstItem = arrNumber[0];
const middleItem = arrNumber[Math.floor(arrNumber.length / 2)];
const lastItem = arrNumber[arrNumber.length - 1];
console.log(`firstItem: ${firstItem}, middleItem: ${middleItem}, lastItem: ${lastItem}`);
console.log('-------------------------');

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes: any[] = [24, 'H.Giang', true, undefined, { age: 21 }, null];
console.log('length mixed data types', mixedDataTypes.length);
console.log('-------------------------');

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log() (6)
console.log('itCompanies', itCompanies);
console.log('-------------------------');

// 8. Print the number of companies in the array (6)
console.log('number of companies', itCompanies.length);
console.log('-------------------------');

// 9. Print the first company, middle and last company (6)
const firstComp = itCompanies[0];
const middleComp = itCompanies[Math.floor(itCompanies.length / 2)];
const lastComp = itCompanies[itCompanies.length - 1];
console.log(`firstComp: ${firstComp}, middleComp: ${middleComp}, lastComp: ${lastComp}`);
console.log('-------------------------');

// 10. Print out each company (6)
itCompanies.forEach(comp => console.log('Company:', comp));
console.log('-------------------------');

// 11. Change each company name to uppercase one by one and print them out (6)
itCompanies.forEach(comp => console.log('Change name Compaby to uppercase:', comp.toLocaleUpperCase()));
console.log('-------------------------');

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies (6)
itCompanies[itCompanies.length - 1] = "and Amazon";
console.log(itCompanies + " are big IT companies.");
console.log('-------------------------');

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found (6)
const findComp = 'Facebook';
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies.includes(findComp)) {
    console.log('Comp:', itCompanies[i]);
    break;
  } else {
    console.log('Comp: Not found');
  }
}
console.log('-------------------------');

// 14. Filter out companies which have more than one 'o' without the filter method (6)
for (let i = 0; i < itCompanies.length; i++) {
  if ((itCompanies[i].split("o").length) > 2) {
    console.log('Companies which have more than one o:', itCompanies[i]);
  }
}
console.log('-------------------------');

// 15. Sort the array using sort() method (6)
const company = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log('Sort array:', company.sort())
console.log('-------------------------');

// 16. Reverse the array using reverse() method (6)
console.log('Reverse array:', company.reverse());
console.log('-------------------------');

// 17. Slice out the first 3 companies from the array (6)
const newCompany = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log('First array:', newCompany)
console.log('Slice out the first 3 companies:', newCompany.slice(0, 3));
console.log('-------------------------');

// 18. Slice out the last 3 companies from the array (6)
const newCompany2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log('First array:', newCompany2);
console.log('Slice out the last 3 companies:', newCompany2.slice(4, newCompany.length));
console.log('-------------------------');

// 19. Slice out the middle IT company or companies from the array
const sliceMiddle = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log('First array:', sliceMiddle);
console.log('Slice out the middle IT company:', sliceMiddle.slice(3,4));
console.log('-------------------------');

// 20. Remove the first IT company from the array
const removeFirstIT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']; 
console.log('First array:', removeFirstIT);
console.log('Remove the first IT company:', removeFirstIT.splice(0, 1)); // or removeFirstIT.shift();
console.log('-------------------------');

// 21. Remove the middle IT company or companies from the array
const removeMiddleIT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']; 
console.log('First array:', removeMiddleIT);
console.log('Remove the middle IT company:', removeMiddleIT.splice(3, 1)); // or removeFirstIT.shift();
console.log('-------------------------');

// 22. Remove the last IT company from the array
const removeLastIT = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']; 
console.log('First array:', removeLastIT);
console.log('Remove the last IT company:', removeLastIT.splice(-1, 1)); // or removeFirstIT.pop();
console.log('-------------------------');

// 23. Remove all IT companies
const removeAll = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']; 
console.log('First array:', removeAll);
console.log('Remove all IT company:', removeAll.splice(0, removeAll.length));
console.log('Array after clear all:', removeAll)
console.log('-------------------------');