
console.log("   TASK 1  ")

var a=10;
let b=20;

console.log("Add    " + a + b) ;
console.log("Sub    " + a - b) ;
console.log("Mul    " + a * b) ;
console.log("Div    " + a / b) ;

console.log( a == b);
console.log( a === b);




console.log("   TASK 2  ")

let student = {
    myname : "touqeer",
    age : 10,
    program : "BSCS",
}


console.log(student.myname);
console.log(student.age);
console.log(student.program);



console.log("   TASK 3  ")

let arr=[1,48,785,952,56,545,65,25,1,6,1,41];
let le=arr.length;
let temp;
for(var i=0; i<le-1; i++ )
{
    if(arr[i]>arr[i+1])
    {   temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
         i=-1;
    }
    
}
console.log(arr);

