import {countries} from "./countries";

//1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the
// array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the
// average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of
// (min - average) and (max - average), use abs() method
import {countries} from "../countries";

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array
ages.sort();
console.log('Sort array:', ages);
// find the min and max age
console.log('Min age:', ages[0]);
console.log('Max age:', ages[ages.length - 1]);
// Find the median age(one middle item or two middle items divided by two)
let medianAge = ages[Math.floor(ages.length / 2)] / 2;
console.log('medianAge:', medianAge)
// Find the average age(all items divided by number of items)
let sumAges = ages.reduce((previousValue, currentValue) => previousValue + currentValue);
let averageAge = sumAges / ages.length;
console.log('averageAge:', averageAge)
// Find the range of the ages(max minus min)
console.log('Range of the ages:', ages[ages.length - 1] - ages[0]);
// Compare the value of (min - average) and (max - average), use abs() method
let minAge = ages[0] - averageAge;
let maxAge = ages[ages.length - 1] - averageAge;
minAge < maxAge ? console.log('(min - average) < (max - average)') : console.log('(min - average) > (max - average)')
console.log('----------------------------------------------------');

//1.1 Slice the first ten countries from the countries array
console.log('Slice the first ten countries:', countries.slice(0, 10));

console.log('----------------------------------------------------');

//2. Find the middle country(ies) in the countries array
if (countries.length % 2 === 0) {
    console.log('The middle country(ies) in the countries:', countries[Math.floor(countries.length / 2)] + ', ' + countries[Math.floor(countries.length / 2) + 1]);
} else {
    console.log('The middle country(ies) in the countries:', countries[Math.floor(countries.length / 2)]);
}

console.log('----------------------------------------------------');

//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries.length % 2 === 0) {
    console.log(countries.length / 2)
    let country1 = countries.splice(0, Math.floor(countries.length / 2));
    let country2 = countries.splice(0, countries.length);
    console.log('country1:', country1);
    console.log('country2:', country2);
} else {
    countries.push('Viet Nam');
    console.log('country:', countries);
}