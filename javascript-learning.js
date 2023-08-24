/*console.log("I started learning JavaScript on 23rd of August. Let's see how this will turn out");
console.log(10+10);
console.log("10"+ + 10);
console.log(10 + +"10");
console.log("day2");
console.log('selam');
//--------------------------------------------------------------
var firstName = "AfyonKaraHisar";
var question = "lılaştıramadıklarımızdan mısınız?"
var age = 26;
var isWoman = true;
var salary = 2344.50;
var dob = new Date(1997,1 ,28);
var student = {};
var empty = undefined;
console.log(firstName);
console.log(firstName.length);
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.substring(0,2));
console.log(firstName.substring(2,5));
console.log(firstName.substring(5,7));
console.log(firstName + " " + question);
console.log(`${firstName}${question}`);
console.log(`${firstName.toLowerCase()}   ${question.toUpperCase()}`);
console.log(age);
console.log(isWoman);
console.log(salary);
console.log(dob);
console.log(student);
console.log(empty);*/
//--------------------------------------------------------------


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

// arrays
var names = ["Ali","Arslan","Burak","Buğra","Bekir","Ceyhun"];
console.log(names[0]);
i = 0;
while (i<names.length){
    console.log(`index ${i} : ${names[i]}`);
    i = i+1;    
}