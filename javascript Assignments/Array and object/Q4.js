
const students = [
    {id:1, firstName:"John", lastName:"Doe", age:20, grade:"A"},
    {id:2, firstName:"Jane", lastName:"Smith", age:22, grade:"B"},
    {id:3, firstName:"Bob", lastName:"Johnson", age:19, grade:"A"},
    {id:4, firstName:"Manik", lastName:"Maity", age:21, grade:"A"},
]

// a) Add Student
function addStudent (fName, lName, age, grade) {
    const newStudent = {
        id: students.length + 1,
        firstName: fName,
        lastName : lName,
        age : age,
        grade : grade
    }
    console.log(newStudent.firstName + " is added.")
    students.push(newStudent);
}
addStudent("Suman", "Maity", 16, "A");



// b) Update Student Info
function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
        console.log(`Student with id ${id} updated.`);
    } else {
        console.log(`Student with id ${id} not found.`);
    }
}

updateStudent(5, {firstName : "Kali", age : 56}); // Student with id 5 updated.


// c)

function deleteStudent (id){
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1){
        const removedStudent = students.splice(studentIndex, 1);
        console.log(removedStudent[0].firstName + "'s data is deleted.")
    }
    else{
        console.log(`Student with id ${id} not found.`);
    }
}

deleteStudent(5); // Kali's data is deleted.


// d)
function listAllStudents() {
    console.log("List of all students:");
    students.forEach(student => {
        console.log(`${student.id}: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}
listAllStudents();
/*
List of all students:
1: John Doe, Age: 20, Grade: A
2: Jane Smith, Age: 22, Grade: B
3: Bob Johnson, Age: 19, Grade: A
4: Manik Maity, Age: 21, Grade: A
*/

// e)
function findStudentWithGrade(grade = ""){
    const filteredStudent = students.filter(student => student.grade === grade.toUpperCase());
    console.log(`Student with grade ${grade}:`)
    return filteredStudent;
}

console.log(findStudentWithGrade("B"));
/*
Student with grade B:
[
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' }
]
*/


// f)
function calculateAvgAge (){
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    console.log("Average student age:")
    return totalAge / students.length;
}

console.log(calculateAvgAge()); 
/*
Average student age:
20.5
*/