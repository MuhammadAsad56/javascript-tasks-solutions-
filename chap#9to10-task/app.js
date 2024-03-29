//task-1//
var userCity = prompt("enter a city")
var requiredCity = "karachi"
if (userCity.toLowerCase() === requiredCity.toLowerCase()) {
    console.log("Welcome to city of lights")
}
else {
    console.log("sorry")
}

//task-2//
var traficColor = prompt("enter a color")
if (traficColor.toLowerCase() === "Red".toLowerCase()) {
    console.log("Must Stop")
}
else if (traficColor.toLowerCase() === "Yellow".toLowerCase()) {
    console.log("Ready to move")
}
else if (traficColor.toLowerCase() === "green".toLowerCase()) {
    console.log("Move now")
}

//task-3//
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true")
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true")
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true")
}
if (c === 13) {
    alert("condition 2 is true")
}
if (c++ < 14) {
    alert("condition 3 is true")
}
if (c++ <= 14) {
    alert("condition 4 is true")
}

// task-4//
var subNumber1 = (prompt("enter a marks"))
var subNumber2 = (prompt("enter a marks"))
var subNumber3 = (prompt("enter a marks"))
if (subNumber1 + subNumber2 + subNumber3 >= 80) {
    console.log("Grade:" + "A-one " + "Excellent")
}
else if (subNumber1 + subNumber2 + subNumber3 >= 70) {
    console.log("Grade:" + "A " + "Good")
}
else if (subNumber1 + subNumber2 + subNumber3 >= 60) {
    console.log("Grade:" + "B " + "You need to imporve")
}
else if (subNumber1 + subNumber2 + subNumber3 < 60) {
    console.log("Grade:" + "Fail " + "Sorry")
}

//task-5 Store a secret number (ranging from 1 to 10) in a variable.prompt user to guess the secret number. if user guesses the same number, show "Bingo! Correct answer". If the guessed number +1 is the secret number,show "Close enough to the correct answer".

var myNum = 7
let userNum = Number(prompt("enter a number"))
if (userNum === myNum) {
    alert("Bingo! Correct answer")
} else if (userNum + 1 === myNum) {
    alert("Close enough to the correct answer")
}

//task-6 Write a program that check wheather the given input is an even number or odd number.

var num = Number(prompt("enter a number"))
if (num % 2 === 0) {
    console.log("even number")
}
else if (num / 2 !== 0) {
    console.log("odd number")
}

//task-7) If number is even print thr table of even number
var num = Number(prompt("enter a number"))
if (num % 2 === 0) {
    for (i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} =  ${num * i} `)
    }
}
else if (num / 2 !== 0) {
    console.log("odd number")
}
