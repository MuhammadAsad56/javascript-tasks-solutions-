// task-3 Write a program that takes input a number from user and state wheather the number is positive ,negative or zero..

var num = Number(prompt("enter a number"))
if (num < 0) {
    alert("number is negative")
}
if (num > 0) {
    alert("number is positive")
}
if (num == 0) {
    alert("number is zero")
}

//  task-5
// Write a program that a)Store Correct pasword im js variable. b)Asks user to enter pasword. c)Validate the two paswords:
// 1)check if user has entered pasword.If Notification,then give message"please enter a oasword". 2)Check if both PAsword are same show mwssaage "correct".Show incorrect pasword otherwise,

var pasword = "asad677"
var userPasword = prompt("enter a pasword")
if (userPasword == 0) {
    alert("please enter a pasword")
}
else if (userPasword === pasword) {
    alert("Correct! The pasword you entered matches the original pasword")
}
else {
    alert("incorrect")
}

// task-6
var greeting;
var hour = 13;
if (hour > 13) {
    console.log(greeting = "Good Day");
} else {
    console.log(greeting = "Good Evening");
}

// task-7 Write a program that takes time as input from user in 24 hours clock format like:1900 == 7pm Implement the following case using if,else & else if statements.

var time = 1900
var flag = false;

if (time > 86 && time < 1200) {
    flag = true
    bconsole.log("Good Morning")
}
else if (time >= 1200 && time < 1700) {
    flag = true
    console.log("Good Afternoon")
}
else if (time >= 1700 && time < 2100) {
    flag = true
    console.log("Good evening")
}
else if (time >= 2100 && time < 2359) {
    flag = true
    console.log("Good Night")
}
