// Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
// “positive” if the number is positive and similarly for negative and zero also.


const number = 7;

const result = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log(result);