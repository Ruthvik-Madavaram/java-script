//Write a program to demonstrate how a function can be passed as a parameter to another function.
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function calculator(operand1,operand2,operation){
    return operation(operand1,operand2);
}
console.log(calculator(2,3,add));
console.log(calculator(2,3,mul));

// An arrow function takes two arguments firstName and lastName and returns a 2 letter string 
// that represents the first letter of both the arguments. For the arguments Roger and Waters, 
// the function returns ‘RW’. Write this function.Submit the github link to the code.
var twoLetters = (firstName,lastName)=>firstName[0]+lastName[0];
console.log(twoLetters("Roger","Waters"));