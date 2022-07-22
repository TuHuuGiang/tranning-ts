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
for (let company of itCompanies) {
    console.log('Company:', company)
}

console.log('----------------------------------------------------');

//11. Change each company name to uppercase one by one and print them out
for (let company of itCompanies) {
    console.log('Company name to uppercase:', company.toUpperCase())
}

console.log('----------------------------------------------------');

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
let itCompaniesCopy: string[] = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Way 1
for (let i = 0; i < itCompaniesCopy.length; i++) {
    if (i === itCompaniesCopy.length - 1) {
        let string = itCompaniesCopy.slice(0, -1).join(', ') + ' and ' + itCompaniesCopy.slice(-1);
        console.log('Way 1:', string)
    }
}

// Way 2
let string = itCompaniesCopy.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ' and ') + value);
console.log('Way 2:', string + ' are big IT companies');

//Way 3
itCompaniesCopy.splice(-1, 1);
console.log('Way 3:', itCompaniesCopy.join(', ') + ' and Amazon')

console.log('----------------------------------------------------');

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let itCompaniesCopy2: string[] = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let enterName: string | null = prompt('Enter name company: ');
if (enterName !== null) {
    let findCompany = itCompaniesCopy2.filter(name => name.toLowerCase() === enterName?.toLowerCase());
    if (findCompany.length > 0) {
        console.log('Company name:', ...findCompany)
    } else {
        console.log('Company is not found')
    }
}

console.log('----------------------------------------------------');

//14. Filter out companies which have more than one 'o' without the filter method
let findOO: string[] = itCompaniesCopy2.filter(find => (find.match(/o/g) || []).length === 2);
console.log(findOO);

console.log('----------------------------------------------------');

//15. Sort the array using sort() method
itCompaniesCopy2.sort();
console.log(itCompaniesCopy2);

console.log('----------------------------------------------------');

//16. Reverse the array using reverse() method
itCompaniesCopy2.reverse();
console.log(itCompaniesCopy2);

console.log('----------------------------------------------------');

//17. Slice out the first 3 companies from the array
let delFirst3Company: string[] = itCompaniesCopy2.slice(0, 3);
console.log('Slice out the first 3 companies:', delFirst3Company);

console.log('----------------------------------------------------');

//18. Slice out the last 3 companies from the array
let delLast3Company: string[] = itCompaniesCopy2.slice(-3);
console.log('Slice out the last 3 companies:', delLast3Company);

console.log('----------------------------------------------------');

//19. Slice out the middle IT company or companies from the array
let delMiddleCompany: string[] = itCompaniesCopy2.slice(Math.floor(itCompaniesCopy2.length / 2), Math.floor(itCompaniesCopy2.length / 2) + 1);
console.log('Slice out the middle IT company:', delMiddleCompany);

console.log('----------------------------------------------------');

//20. Remove the first IT company from the array
let removeFirstIT: string[] = itCompaniesCopy2.splice(0, 1);
console.log('removeFirstIT:', removeFirstIT)

console.log('----------------------------------------------------');

//21. Remove the middle IT company or companies from the array
let itCompaniesCopy3: string[] = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let findIndexMiddle: number = Math.floor(itCompaniesCopy3.length / 2);
let removeMiddleIT: string[] = itCompaniesCopy3.splice(findIndexMiddle, 1);
console.log('removeMiddleIT:', removeMiddleIT);

console.log('----------------------------------------------------');

//22. Remove the last IT company from the array
let removeLastIT: string[] = itCompaniesCopy3.splice((itCompaniesCopy3.length - 1), 1);
console.log('removeLastIT:', removeLastIT)

console.log('----------------------------------------------------');

//23. Remove all IT companies
// Way 1
itCompaniesCopy3 = [];

// Way 2
// itCompaniesCopy3.length = 0;
console.log(itCompaniesCopy3);