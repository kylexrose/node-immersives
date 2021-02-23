// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");
let firstName = getInput(0);
let lastName = getInput(1);
let fullName = firstName + " " + lastName;

console.log("Hello, " + fullName);
console.log("Your name capitalized is " + fullName.toUpperCase());
console.log("Your initials are " + firstName[0] + "." + lastName[0] + ".");
console.log("Your CodeImmersives email is " + firstName.toLowerCase() + "." + lastName.toLowerCase() + "@codeimmersives.com");