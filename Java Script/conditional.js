const prompt = require('prompt-sync')();
let age =  prompt("Enter your age: ");

if (age >= 18 && age <= 150){
    console.log("You are eligible to vote.");
}
else if (age < 0 || age > 150) {
    console.log("Please enter a valid age between 0 and 150.");
}
else {
    let age_left = 18 - age;
    console.log(`You are not eligible to vote. You have ${age_left} years left to vote.`);
}