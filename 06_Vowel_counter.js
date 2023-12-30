// The Vowel Counter: You need to create a function that counts the number of vowels in a given
// string. Consider both uppercase and lowercase vowels.

let count = 0;
let string = "namen";
let string2 = string.toLowerCase()
const vowelCount = () => {
  for(let i of string2){
      if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
          console.log(i)
          count++
      }
  }
  
  return count;
};

console.log(vowelCount);
