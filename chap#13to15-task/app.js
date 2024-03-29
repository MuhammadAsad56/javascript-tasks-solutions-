// let arr = ["ali","Asad","Sallu"]



// task-9 Initialize the array with color names.Display the array elements in your browser
// a)Ask the user what color he wants to add to the beginning and add that color to the beginning of the array show that:

let arr = ["", "Black", "Red", "White"]
console.log(arr.join(' '))
let user = prompt("enter a color")
arr[0] = user;
console.log(arr.join(' '))

// b)Ask the user what color she want to add to the end & add that color to the end of the array.Display the updated array:
arr[arr.length] = user
console.log(arr.join(' '))

// c) add two more color in the beginning of the array show the display:
arr.unshift(user)
console.log(arr.join(" "))

//d) DElete the first color in the array,show the updated array
arr.shift()
console.log(arr.join(" "))

//f) Ask the user at which index he wants to add a color & color name.Then add the color iin array , show the updated array
let userIndexNumber = prompt("enter a num")
let userColorChoice = prompt("enter a color name")
arr.splice(userIndexNumber, 0, userColorChoice)
console.log(arr.join(" "))

//f) Ask the user at which index he wants to delete a color & how many colors he wants to delete , show the updated array
let userNumber = prompt("enter a num")
let userDeleteChoice = prompt("enter a delete num")
arr.splice(userIndexNumber, userDeleteChoice)
console.log(arr.join(" "))

// task-10: Write a program to store student scores in an array & sort the array in ascending order using array's sort method.
var scoreOfStu = [120, 65, 220, 500, 50]
scoreOfStu.sort()
console.log(scoreOfStu)





