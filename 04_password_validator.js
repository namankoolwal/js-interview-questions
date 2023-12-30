// The Password Validator. You are building a password validation feature. Create a function that
// checks if a given password meets the following criteria: at least 8 characters long, contains both
// uppercase and lowercase letters, and includes at least one digit.


const passwordValid = (pass) =>{
    let regex= /(\w+\d+\w+)/g
    let haspass = regex.test(pass)
    return pass.length>8 && haspass ? "Valid Password" : "Invalid Password"
}

console.log(passwordValid("Expression"))