//<!.......array in js .....>
//let marks=[30,40,50];
//console.log(marks);
//console.log(marks.length);
//let heroes=["amirkhan","imran khan","papa","mama"];
//console.log(heroes);
//<.....loop in the arrays.......>
/*let cities=["punjab","peshawar","lahore","karachi","islamabad"];
for(let city of cities){
console.log(city.toLocaleUpperCase());

}
let marks=[30,40,50,60,70];
let sum=0;
for(let val of marks){
    sum=sum+val;

}
let avg=sum/marks.length;
console.log(`avg marks of class =${avg}`);
//question 2
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    console.log(`th val of item is =${val} `)
    let offer =val/10;
    items[i]=items[i]-offer;
    console.log(`val after offer =${items[i]}`);



    
}
//this program is using for loop 
let items = [200,300,400,900];
for(let i=0; i<items.length; i++){
    let offer =items[i]/10;
items[i]=items[i]-offer;
}console.log(items);
//array method
//push() method in array
let fooditems=["patopo","tamato","mango","orange"];
fooditems.push("chips","paneer","shanii sha ");
console.log(fooditems); 
let fooditems=["patopo","tamato","mango","orange"];
console.log(fooditems); 
let deleteditems=fooditems.pop();
console.log(fooditems); 
console.log("deleted",deleteditems);  
// tostring
let fooditems=["patopo","tamato","mango","orange"];
console.log(fooditems);
console.log(fooditems.toString());
console.log(fooditems);

//concat()
let cricket=["babar","azam","shaheen"];
let football=["Ranadlo","messi","namer"];
let volleyball=["murAM","JANIII"];
let game= cricket.concat(football,volleyball);

console.log(game);
//UNSHIFT 
//let cricket=["babar","azam","shaheen"];
//cricket.unshift("muhrram");
let cricket=["babar","azam","shaheen"];
let val=cricket.shift();
console.log("deleted",val); 
// <...........splice()......>
let arr=[1,2,3,4,5,6,7];
//arr.splice(2,2,101,102);
//arr.splice(1,1);
arr.splice(1,2, 101); */
//<........pratice question....>
let companeis=["bloombeger","microsoft","uber","google","IBM","netflix"];
companeis.shift();
companeis.splice(2,1,"ola");
companeis.push("amazon");
