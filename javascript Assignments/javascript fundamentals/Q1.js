// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.




function outerFunction(outerParam) {
    const outerVariable = "I'm from outer";
  
    function innerFunction() {
      console.log("Outer parameter:", outerParam);
      console.log("Outer variable:", outerVariable);
    }
  
    return innerFunction;
  }
  
  const myInnerFunction = outerFunction("Hello");
  myInnerFunction(); 