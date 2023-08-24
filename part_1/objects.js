var student = {
    firstName: "Harry",
    lastName: "Potter",
    age: 17,
    house : "Gryffindor",
    dateOfBirth: new Date(1980, 6, 32).toJSON(),
    address: "number 4 Privet Drive, Little Whinging, Surrey",
    enemies : {
        enemyOne:"Voldemort",
        enemyTwo:"Bellatrix"
    },
    isActiveStudent: false 
}
if(student.isActiveStudent){
console.log(student.dateOfBirth);
console.log(student.enemies.enemyOne);
console.log(student.enemies.enemyTwo);
console.log(Object.values(student));
console.log(Object.keys(student));
console.log(Object.keys(student.enemies));
console.log(JSON.stringify(student));
} else{
    console.log(`${student.firstName} ${"is not an active student"}`)
};
