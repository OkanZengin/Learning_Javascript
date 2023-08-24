var names = ["Ali","Arslan","Burak","Buğra","Bekir","Ceyhun"];
console.log(names[0]);
i = 0;
while (i<names.length){
    console.log(`index ${i} : ${names[i]}`);
    i = i+1;    
}

i = 0;
do{
    console.log(`index ${i} : ${names[i]}`);
    i = i+1;
}
while(i !=7);


i = 0;
while(true){
    if (i == 10){
        break;
    } 
    else{
    console.log(`index ${i} : ${names[i]}`);
    i = i+1;
}
}