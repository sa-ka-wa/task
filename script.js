//task 1 

// Define the array
let a = [5, 10, 15, 20, 25];
// Create a new array with the first and last elements
let newArray = [a[0], a[a.length - 1]];
// Print the new array
console.log(newArray)

//task 2

var prompt = require("prompt-sync")();
let taskTwo = parseInt(prompt("Enter a number"));
const result = taskTwo % 2 === 0 ? "even" : "odd";
console.log(result);

//task 3

let phone = prompt("Enter a phone number");
console.log(typeof phone);
let phoneNumber = phone.trim(); //remove white spaces
console.log(typeof phoneNumber);
if (phoneNumber.slice(0, 4) === "+254") {
  console.log("Valid phone number");
} else if (
  phoneNumber.slice(0, 2) === "07" ||
  phoneNumber.slice(0, 2) === "01"
) {
  console.log("+254" + phoneNumber.slice(1));
} else if (phoneNumber.slice(0, 1) === "7" || phoneNumber.slice(0, 1) === "1") {
  console.log("+254" + phoneNumber);
} else {
  console.log("Invalid phone number");
}

//task 4

let email = prompt("Enter an email address");
let emailAdress = email.trim();
if (emailAdress.includes("@") && emailAdress.includes(".")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}

//task 5

let value = [];
value.push(parseInt(prompt("Enter a value")));
value.push(parseInt(prompt("Enter a value")));
value.push(parseInt(prompt("Enter a value")));
console.log(value);
let numbers = value.sort((a, b) => a - b);
console.log(numbers);
let modulusOne = numbers[0] % 4 === 0 ? "true" : "false";
console.log(numbers[0], " is divisible by 4 :", modulusOne);
let modulusTwo = numbers[1] % 4 === 0 ? "true" : "false";
console.log(numbers[1], " is divisible by 4 :", modulusTwo);
let modulusThree = numbers[2] % 4 === 0 ? "true" : "false";
console.log(numbers[2], " is divisible by 4 :", modulusThree);

//task 6

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayNumbersOne = arrayNumbers.slice(0, 5);
let arrayNumbersTwo = arrayNumbers.slice(5, 10);
console.log(arrayNumbersOne);
console.log(arrayNumbersTwo);

//task 7

for (let i = 0; i < 5; i++) {

  console.log(i);
  if i % 2 === 0{
    console.log("even")

}else{
  console.log("odd")
}}

//task 8
