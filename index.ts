#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1); // +1 to generate a number from 1 to 6.
const guessedNumber = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please enter a number between 1-6: ",
    },
]);
if (guessedNumber.userGuessedNumber === randomNumber) {
    console.log("Good Job! You guessed a right number.");
} else {
    console.log("You guessed a wrong number.");
}
