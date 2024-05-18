#! /usr/bin/env node

import inquirer from "inquirer";

let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter your friend name Zeejay:"
}]);
if (isFriend.name ==="Fahad" || isFriend.name === "Shahbaz") {
    console.log(`${isFriend.name} is your friend.`);
} else {
    console.log(`${isFriend.name} is not your friend.`);
}