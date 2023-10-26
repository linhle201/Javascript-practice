"use strict";
/* Program 1700-Logic & Programming
Author: Linh Le
Date: October 22, 2023
Exercise 11: Debugging & Loops
 */
let readlineSync = require('readline-sync');
function main(){
console.log("Welcome to my number guessing game!");

//input
//assign the number of guesses in the game
let total_guesses= 10;
let bingo_number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

//Process
for(let i = 0; i < total_guesses; i++)
{
	let number = parseInt(readlineSync.question("Enter a number(1-100): "));
	
	if (number < bingo_number)
	{
		console.log("Try a higher number");
	} 
	else if (number > bingo_number)
	{
		console.log("Maybe lower");
	} 
	else if (number == bingo_number)
	{
		console.log("You got it! The number is:" + bingo_number);
		break;
	}
}

console.log("Game Over");
}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
