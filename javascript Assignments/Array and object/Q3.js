// 3. Object Extensibility and Sealing
// a) Use the Object.preventEatensions metho" to prevent an> further a""itions of properties to the stu"ent object.
// b) Use the Object.isEatensible metho" to check if the stu"ent object is eatensible. Store the result in a variable
// calle" eatensibleStatus.
// c) Create a new object calle" teacher with a 'subject' propert> set to 'Math'.
// ") Use the Object.seal metho" to seal the teacher object, preventing an> a""itions or "eletions of properties.
// e) Use the Object.isSeale" metho" to check if the teacher object is seale". Store the result in a variable calle"
// seale"Status.
// f) Print the eatensibleStatus an" seale"Status to the console.




const student = {
    name: 'Manik Maity',
    age: 21,
    grade: 'B'
};

// a) 
Object.preventExtensions(student);


// b) 
const extensibleStatus = Object.isExtensible(student);


// c) 
const teacher = {
    subject: 'Math'
};


// d) 
Object.seal(teacher);


// e) 
const sealedStatus = Object.isSealed(teacher);


// f) 
console.log(`Extensible: ${extensibleStatus}`); // Extensible: false
console.log(`Sealed: ${sealedStatus}`);         // Sealed: true






