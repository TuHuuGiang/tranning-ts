import './style.css'
import {countries} from "./countries";
import {webTechs} from "./web_techs";

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h2>Tranning TS</h2>
`

//1. Write a code which can give grades to students according to theirs scores:
// let enterScore: number = Number(prompt('Enter score: '));
//
// if (!isNaN(enterScore)) {
//     if (enterScore <= 100 || enterScore >= 80) {
//         console.log('Score A');
//     } else if (enterScore <= 89 || enterScore >= 70) {
//         console.log('Score B');
//     } else if (enterScore <= 69 || enterScore >= 60) {
//         console.log('Score C');
//     } else if (enterScore <= 59 || enterScore >= 50) {
//         console.log('Score D');
//     } else if (enterScore <= 49 || enterScore >= 0) {
//         console.log('Score F');
//     }
// } else {
//     console.log('Scores must be a number and not empty');
// }


//2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// let enterSeason: string = String(prompt('Enter season: '));
//
// switch (enterSeason !== '') {
//     case enterSeason.toLowerCase() === 'september':
//     case enterSeason.toLowerCase() === 'october':
//     case enterSeason.toLowerCase() === 'november':
//         console.log('The season is Autumn');
//         break;
//     case enterSeason.toLowerCase() === 'december':
//     case enterSeason.toLowerCase() === 'january':
//     case enterSeason.toLowerCase() === 'february':
//         console.log('The season is Winter');
//         break;
//     case enterSeason.toLowerCase() === 'march':
//     case enterSeason.toLowerCase() === 'april':
//     case enterSeason.toLowerCase() === 'may':
//         console.log('The season is Spring');
//         break;
//     case enterSeason.toLowerCase() === 'june':
//     case enterSeason.toLowerCase() === 'july':
//     case enterSeason.toLowerCase() === 'august':
//         console.log('The season is Summer');
//         break;
//     default:
//         console.log('Not month');
//         break;
// }

//3. Check if a day is weekend day or a working day. Your script will take day as an input
let dayWorking = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

let enterDay: string = String(prompt('Enter day: '));

console.log(dayWorking.includes(enterDay.toLowerCase()))
if (dayWorking.includes(enterDay.toLowerCase())) {
    console.log(`${enterDay} is a working day`)
} else {
    console.log(`${enterDay} is a weekend`)
}