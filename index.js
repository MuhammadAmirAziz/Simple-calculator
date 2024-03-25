#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "firstnumber",
    },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "Selet one of the operators to perform actoin",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    },
]);
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if (asnwer.operator === "subtraction") {
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else {
    console.log("Please select valid number");
}
;
