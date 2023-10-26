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
let total_guesses = 10;
let bingo_number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

//process
let number = parseFloat(readlineSync.question("Please enter bingo number that you think: "));
for (i= 0; i < total_guesses; i = i ++ ){
    if ( number <bingo_number){

        console.log("please guess higher number");
    }else if (number > bingo_number){
        console.log("please guess lower number");
    }else {
        console.log ("you got it!!!" + bingo_number)
    }
}

console.log("Game Over");
}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
