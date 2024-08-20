// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.


function findFactorial(num) {
    if (num === 0) return 1
    let factorial = num * findFactorial(num - 1)
    return factorial;
  }
  
console.log(findFactorial(5)) // 120
console.log(findFactorial(7)) // 5040