

    // <............for loop............>
/*for(var i=0; i<n; i++){ // zero saa lakar (n-1) tak print hoo jagaya ga
    alert(i)
}*/
//program to add first natural number 
/*let sum=0;
let n=prompt("Enter the value of n")
n=Number.parseInt(n)
for(let i=0;i<n;i++){
    sum+=(i+1)
}
alert("sum of n  "+n+"natural number is"+sum)


// <............for  in loop............>
let obj={
    muhrram:40,
    ali:30,
    wajii : 59,
    khan:90.

}
for(let a in obj){
    alert("marks of"+a+"are"+obj[a])
}
for(let i=1;i<=4;i++){

    alert("hi",i)
    for(let j=1;j<=5;j++){
    alert("hellow")}
}
//<..........while loop........>
let n=prompt("Enter the n");
n=Number.parseInt(n);
let i=0;
while(i<n){
    console.log(i);
    i++;    
}
//<.............do while loop.........>
let n=prompt("Enter the n");
n=Number.parseInt(n);
let i=10;
do{
   
    i++;    
}while(i<n)
for(let i=1;i<=5;i++){
    console.log("muhrram ali gul")
}
console.log("loop have ended")*/

let sum=0;
for(let i=0;i<=100;i++){

    sum=sum+i;                  //first time sum=0+1=1;
                               //second time sum=1+2...........fifth time 
}
console.log("sum=",sum)
console.log("loop ended")
for(let i=1;i<=5;i++){
    console.log("i=",i)
}
 








































