import './style.css'
import { countries } from './country';
import { webTechs } from './web_techs';


const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h2>Tranning TS</h2>
`
// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or 
// two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), 
//use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort();
console.log(`Min age ${ages[0]}, max age ${ages[ages.length - 1]}`);
// Find the median age
const ageMedian = ages[Math.floor(ages.length / 2)]
console.log('Median age:', ageMedian);
// Find the average age