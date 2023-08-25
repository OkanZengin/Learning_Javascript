for( var i = 10; i<=15; i++){
    console.log("value of i inside the loop: "+ i);
}
    console.log("value of i outside the loop: " + i);

//----------------

for (let j = 20; j<=25; j++){
    console.log("value of j inside the loop: "+ j);
}
/*    console.log("value of j outside the loop: " + j);
        This line cause an error.
        Error: ReferenceError: j is not defined 
        "let" keyword is like a local variable
        */

var value = "String";
value = {};
value = 61;
value = function(){
    return "this is a function";
}
console.log(value());

const value_2 = "String";
/* value_2 = "something else";
    This line cause an error.
    Error: TypeError: Assignment to constant variable. 
    cannot reassign const variable.    */
console.log(value_2);

// reassignment is not allowed but this.. can be done

const value_3 = {};
// value_3 = 2; this is not allowed.
value_3["first_string: "] = value_2;
value_3["second_string: "] = "is allowed";

console.log(value_3)
//or
delete value_3["first_string: "];
console.log(value_3);