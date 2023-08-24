var numberone=132;
var numbertwo=3456;

console.log(`number one, originally : ${numberone}`);
console.log(`number two, originally : ${numbertwo}`);
console.log(`number one, increment after number : ${numberone++}`);
console.log(`number two, increment before number: ${++numbertwo}`);
console.log(`number one, no inc/dec: ${numberone}`);
console.log(`number two, no inc/dec: ${numbertwo}`);
console.log(`number one, decrement after number : ${numberone--}`);
console.log(`number two, decrement before number: ${--numbertwo}`);
console.log(`number one, no inc/dec: ${numberone}`);
console.log(`number two, no inc/dec: ${numbertwo}`); 

console.log("-----------------");

for(var i =1; i<15; i++ ){
    if(i<6){
        console.log("i is less than 6 " + i);
        if(i == 3){
            console.log("i is 3 now");
        }else if(i!=4){
            console.log("i is not 4");
            }
        }
    else if(i==6){
        console.log("i is 6 " + i);
    } else if(i>6){
        console.log("i is greater than 6 " + i);
    }
};

