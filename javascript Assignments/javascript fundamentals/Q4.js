// Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string.


function extractGroups(pattern, string) {
    const regex = new RegExp(pattern);
    const match = regex.exec(string);
    if (match) {
      return match.slice(1);
    } else {
      return null;
    }
  }
  
  // Test cases
  const dateString = "The date is 2023-12-25";
  const datePattern = /(\d{4})-(\d{2})-(\d{2})/;
  
  const extractedDate = extractGroups(datePattern, dateString);
  console.log(extractedDate);