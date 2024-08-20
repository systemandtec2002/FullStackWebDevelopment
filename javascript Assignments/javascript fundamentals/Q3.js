// // Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// // Create a function that searches for specific character classes in a given string and returns the matches. Test
// // the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

// function findCharacterClasses(string, pattern) {
//     const regex = new RegExp(pattern, "g"); // g flag for global match
//     const matches = string.match(regex);
//     return matches || [];
//   }
  
//   // Test cases
//   const text = "Hello, world! 12345";
  
//   console.log(findCharacterClasses(text, "\\d+")); // Digits
//   console.log(findCharacterClasses(text, "[A-Z]")); // Uppercase letters
//   console.log(findCharacterClasses(text, "[a-z]")); // Lowercase letters
//   console.log(findCharacterClasses(text, "\\W")); // Special characters

function findCharacterClasses(string, pattern) {
    const regex = new RegExp(pattern, "g"); // g flag for global match
    const matches = string.match(regex);
    return matches || [];
  }
  
  // Test cases
  const text = "Hello, world! 12345@#$%";
  
  console.log(findCharacterClasses(text, "\\d+")); 

  console.log(findCharacterClasses(text, "[A-Z]")); 

  console.log(findCharacterClasses(text, "[a-z]")); 

  console.log(findCharacterClasses(text, "\\W"));

  console.log(findCharacterClasses(text, "\\s")); 
  
  console.log(findCharacterClasses(text, "\\S")); 