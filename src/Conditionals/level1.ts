// //1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive'
// // but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let enterYourAge = prompt('Enter your age: ');

if(enterYourAge) {
    if(Number(enterYourAge) >= 18) {
        console.log('You are old enough to drive');
    } else {
        console.log(`You are left with ${18 - Number(enterYourAge)} years to drive.`);
    }
} else {
    console.log('Age must be a number and not empty');
}
//
// //2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating
// // who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge: number = 22;
let yourAge: number = Number(prompt('Enter your age: '));

if(!isNaN(yourAge)) {
    if(myAge > Number(yourAge)) {
        console.log('myAge > yourAge');
    } else {
        console.log(`You are ${myAge - yourAge} years older than me`);
    }
} else {
    console.log('Age must be a number and not empty');
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
//using if else
let a = 3;
let b = 4;

if (a > b) {
    console.log('Way 1: a > b');
} else {
    console.log('Way 1: b < a');
}

a > b ? console.log('Way 2: a > b') : console.log('Way 2: a < b')

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let enterNumber: number = Number(prompt('Enter number: '));

if (enterNumber % 2 === 0) {
    console.log(`${enterNumber} is an even number`)
} else {
    console.log(`${enterNumber} is is an odd number`)
}