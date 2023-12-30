// The Mirror Mirror. Imagine you have a String, and you need to create a new String that is a mirror
// image of the original. Write a function that appends the reversed version of the original string to
// itself.


let string = "apple"
let rev = string.split("").reverse().join("")
let mirror = string+rev
console.log(mirror)