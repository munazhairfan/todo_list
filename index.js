#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
for (let i = 0; i < 11; ++i) {
    let answer = await inquirer.prompt([{
            name: 'q1',
            type: 'input',
            message: 'What would you like to add in your list?'
        }]);
    let items = todos.push(answer.q1);
    console.log(todos);
}
;
console.log("You can only add 10 items!");
console.log("THANK YOU!");
