//  Q2. Write a program that grades st9dents based on their marks^
// 8 If grFatFr than 90 thFn A GradE
// 8 If bFtwFFn 70 and 90 thFn a B gradE
// 8 If bFtwFFn 50 and 70 thFn a C gradE
// 8 BFlow 50 thFn an F gradF


let studentMarks = 85;

function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else {
    return "F";
  }
}

let grade = calculateGrade(studentMarks);
console.log("Grade:", grade);

