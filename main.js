var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];


for (var i=0; i < students.length; i++) {
    console.log(students[i].name);
}

for (var i=0; i < students.length; i++) {
    console.log(students[i].age);
}

for (var i=0; i < students.length; i++) {
    console.log(students[i].name,', ', students[i].city)
}

for (var i=0; i < students.length; i++) {
    if (students[i].city==="Boulder") {
        console.log(students[i].name, "is from ", students[i].city)
    }
}

for (var i=0; i < students.length; i++) {
    if (students[i].age>25){
        console.log(students[i].name, "is older than 25")
    }
}

// for (var i=0; i < students.length; i++) {
//     if (students[i].city==="Boulder") {
//         console.log(students[i].name, "is from ", students[i].city)
//     }
// }
// - 25 27 32 24 18
// - Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver
// - Liz is from Boulder Trent is from Boulder Chelsea is from Boulder
// - Meghan is older than 25 Trent is older than 25