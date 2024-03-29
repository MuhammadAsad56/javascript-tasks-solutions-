//Q) Write a program to print multiplication table of any number using for loop.Table number & length should be taken as an input from User 

var num = prompt("enter a num")
var num2 = prompt("enter a num")
for (i = 1; i <= num2; i++) {
    console.log(num + " * " + i + " = " + num * i)
}

//task-5
var fruits = ["apple", "banana", "mango", "orange", "strawbwey"]
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
    console.log(`Element at index ${i} is ${fruits[i]}`)
}

// var count = [1,2,3,4,5,12,7,8,9]
// count.sort()
// // count = count.reverse();
// console.log(count.join(" "))

// for (i = 0; i < 1; i++){
//     for (j = 1; j < 16; j++){
//         console.log(j)
//     }
// }

// Q) You have an array A = ["cake","apple pie","cookie","chips","patties"]Write a program to enable "search by user input" in an array.After searching.promts the user eheather the given item to found in the list or not exampe umer asif

let A = ["Cake", "apple pie", "cookie", "chips", "patties"]
let B = prompt("enter a item").toLowerCase()
var flag = "nhi"
for (i = 0; i < A.length; i++) {
    var C = A[i].toLowerCase().indexOf(B)
    // console.log(C)
    if (C != -1) {
        flag = "yes"
        break
    }
    if (C == -1) {
        flag
    }
}
if (flag == "yes") {
    console.log(`${B} is available at index ${i} in our bakery`)
}
if (flag == "nhi") {
    console.log(`${B} is not available in our bakery`)
}

//task-9
var a = [24, 45, 87, 32, 22]
console.log(`Array items ${a}`)
console.log(`The smallest Number ${Math.min(...a)}`)

//task-10) Write a program to print multiples of 5 ranging 1 to 100

var a = 5
var arr = []
for (i = 1; i <= 20; i++) {
    var b = i * 5
    arr.push(b)
}
console.log(arr.join(","))