var names = ["Ali","Arslan","Burak","Buğra","Bekir","Ceyhun"];
console.log("for i");

for(var i = 0; i<names.length; i++){
    console.log(`index ${i} : ${names[i]}`);
}
console.log("\nfor of");
for(const name of names){
    console.log(`index ${names.indexOf(name)} : ${name}`);
}
/*
for (const iterator of object) {
    
} */

console.log("\nfor each")
names.forEach(function(name){
    console.log(`index ${names.indexOf(name)} : ${name}`);
})
