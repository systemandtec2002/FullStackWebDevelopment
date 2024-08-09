// Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the
// person is less than 18 then “You cannot vote” should be logged else “You can vote” should be logged.

const age = 20;

const canVote =  (age >= 18) ? "You can vote" : "You can't vote";
console.log(canVote )