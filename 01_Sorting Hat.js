// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school.
// Implement a JavaScript function that takes an array Of student names and assigns them to one Of
// the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length
// less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.



let students = ['naman',"venkatesh","ady","venkanaidu","sheetaldi","vijaykumarreddy","abaykum"]

let groups = []

for(let student of students){
    if(student.length<6){
        groups.push({name:student,house:"Gryffindor"})
    }
    else if(student.length<8){
        groups.push({name:student, house:"Hufflepuff"})
    }
    else if(student.length<12){
        groups.push({name:student, house:"Ravenclaw"})
    }
    else{
        groups.push({name:student, house:"Slytherin"})
    }
}

console.log(groups)