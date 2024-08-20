// Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.



function hasMatch(pattern, string) {
    const regex = new RegExp(pattern);
    return regex.test(string);
  }
  
  // Test cases
  console.log(hasMatch("hello", "Hello, world!")); // Output: false (case-sensitive)
  console.log(hasMatch("hello", "Hello, world!")); // Output: true (case-insensitive)
  console.log(hasMatch("^world$", "Hello, world!")); // Output: false (exact match)
  console.log(hasMatch("\\d+", "12345")); // Output: true (matches digits)