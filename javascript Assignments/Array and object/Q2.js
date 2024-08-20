// 2. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 2i, 24, 25, 24#
//  Sort the arra> an" fin" the min an" maa age`
// Fin" the me"ian age(one mi""le item or two mi""le items "ivi"e" b> two^
// Fin" the average age(all items "ivi"e" b> number of items^
// Fin" the range of the ages(maa minus min^
// Compare the value of (min - average) an" (maa - average), use abs() metho"


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sorting the array
ages.sort((a, b) => a - b);
console.log(`Sorted ages: ${ages}`);



const minAge = ages[0]; // minimum age
const maxAge = ages[ages.length - 1]; // maximum age
console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);


//  median age
const midIndex = Math.floor(ages.length / 2);
let medianAge;

if (ages.length % 2 === 0) {
    medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
    medianAge = ages[midIndex];
}
console.log(`Median age: ${medianAge}`);




// average age
const totalAge = ages.reduce((acc, age) => acc + age, 0);
const averageAge = totalAge / ages.length;
console.log(`Average age: ${averageAge.toFixed(2)}`);


// range of ages
const range = maxAge - minAge;
console.log(`Range of ages: ${range}`);


// Compare min - average and max - average
const minAverageDifference = Math.abs(minAge - averageAge);
const maxAverageDifference = Math.abs(maxAge - averageAge);

console.log(`Min - Average: ${minAverageDifference.toFixed(2)}`);
console.log(`Max - Average: ${maxAverageDifference.toFixed(2)}`);