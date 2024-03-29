// task-1
var a = 10
var resultA = "Result:" + "<br>" + "The value of a is " + a;
document.write(resultA + "<br>" + "<br>")

a = ++a;
var resultB = "The value of ++a is: " + a + "<br> Now the value is 11";
document.write(resultB + "<br>" + "<br>")

a = a++;
var resultC = "The value of a++ is: " + a + "<br> Now the value is 11";
document.write(resultC + "<br>" + "<br>")

a = --a;
var resultD = "The value of --a is: " + a + "<br> Now the value is 10";
document.write(resultD + "<br>" + "<br>")

a = a--;
var resultE = "The value of a-- is: " + a + "<br> Now the value is 10";
document.write(resultE)

// task-2
var a = 2;
var b = 1;
var result = --a - --b;

// task-3
var num = prompt("enter a number","5")
document.write(num + " * " + 2 + " = " + num * 2)

// task-4

var subject1 = prompt("enter a subject")
var subject2 = prompt("enter a subject")
var subject3 = prompt("enter a subject")
var totalMarks = 100
var userObtainedMarks1 = prompt("enter a marks")
var userObtainedMarks2 = prompt("enter a marks")
var userObtainedMarks3 = prompt("enter a marks") 
document.write("Total Marks " + "Obtained Marks " + "Percentage" + "<br>")
document.write(totalMarks + " " + userObtainedMarks1 + " " + totalMarks*userObtainedMarks1 / 100 )
//this task is not complete

