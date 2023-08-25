var number = 6;
if (number %2 == 0){
    console.log("even number");
}else {
    console.log("odd number");
}
var number_2 = 346;
var result = number_2 % 2 == 0 ? "Even number" : "Odd number";
console.log(result);

var result_2 = number_2 % 2;

switch(result_2){
    case 0:
        console.log("Even number");
        break;
    case 1:
        console.log("Odd number");
        break;
    default:
        console.log("unknown");
}