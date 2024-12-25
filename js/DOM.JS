/*let button=document.getElementsByClassName("myid");
console.dir(button);

let headings=document.getElementsByClassName("myclass");
console.dir(headings);
console.log(headings);
let firstEL=document.querySelectorAll("p");
console.log("p")
///pratice question in js 
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+ "from apna college students"; 
// Q2.............
let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
   div.innerText=`new unique value ${idx}`
   idx++;
} 
//divs[0].innerText="unique value 1";
//divs[1].innerText="unique value 2";
//divs[2].innerText="unique value 3";
let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id"); 
let para=document.querySelector("p");
console.log(para.setAttributeAttribute("class","newclass"));
let div=document.querySelector("div");
div.style.backgroundColor="red";
// how can we add button in differebt location or manipulation
let newbtn=document.createElement("button");
newbtn.innerText="click me!";
console.log(newbtn);
let div=document.querySelector("div"); // if we want to add THIS BUTTON AFTER THIS PARAGRAPH then we can change the qurrey selector in p insted of div
//div.append(newbtn); to add button at hte end of this div 
div.prepend(newbtn);
// div.prepend is used to add buttton at the stsrtof this div
 */
// pratices question 
let newBtn=document.createElement("button");
newBtn.innerText= "click me!";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);
//q2
let para=document.querySelector("p");




