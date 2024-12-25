/*function myfunction() {
    console.log("we are learing js ");
    console.log("wellcome wajii to my broken heart ");
}
myfunction();
myfunction();
//sum of two number in js 
function sum(x, y){
    
    return x+y;
  

}
 let val=sum(3,4); 
 console.log(val);


/* Define a function to calculate the sum of two numbers
function sum(num1, num2) {
    return num1 + num2;
}

// Define the two numbers
let number1 = 5;
let number2 = 10;

// Call the function and store the result
let result = sum(number1, number2);

// Output the result
//console.log("The sum of " + number1 + " and " + number2 + " is " + result);
 
 // arrow function
 const sum = ( a, b ) => {
      return a + b;
  };
//mulfunction
const mulfunction=(a,b)=>{
 return a*b;
}  
// pratice question 
  function countvowels(str){
let count =0;
for(const char of str){

    if(char==="a" || char==="e" ||char==="i"||char==="o"||char==="u"){
        count++;
    }
}
  return count;
   
}
const countvow=(str)=>{
    let count =0;
    for(const char of str){
    
        if(char==="a" || char==="e" ||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
      return count;


}
//<..............foreach function...........>
let arr=["lahore","islambad","karachi"];
//arr.forEach(function printval(val)  {
   // console.log(val)
//})
arr.forEach((Val)=>{
    console.log(Val);
}); 

let numbers=[2,3,4,5,6];
numbers.forEach((num)=>{
console.log(num*num);
});
//<!..........map methid in js........>
let nums=[1,2,3,4,5];
let newArr=nums.map((val)=>{
  return val*2;          ////jab khoi new array create karna hii ti ham map use karta ha but foreach jab khoi array ko print karvana hoo tab
});
console.log(newArr);X
// filter mthod :is ma hum jo ha kuch condition lagakar us saa hum apna desire nakhaltay ha
let arr=[1,2,3,4,5,6,7,8];
let evenarr=arr.filter((val)=>{
    return val%2==0;

});
console.log(evenarr)
let arr=[1,2,3,4,5,6];
const Output=arr.reduce((prv,curr)=>{
return prv+curr;
});
console.log(Output); 
let arr=[1,2,3,4,5,6];
const Output=arr.reduce((prv,curr)=>{
return prv>curr? prv:curr;
});
console.log(Output);
let marks=[98,89,45,67,99,95];
let topper=marks.filter((val)=>{
   return val>90;
});
console.log(topper)*/
//pratices question
let n=prompt("enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
arr[i]=i-1;
}
console.log(arr);

let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum",sum);

let factorial=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial=",factorial);