//let btn1=document.querySelector("btn1");
//btn1.onclick=()=>{
//console.log("button1 was clicked");
//};

modebtn=document.querySelector("#mode");
let currentmode="light";
modebtn.addEventListener("click",()=>{
  
if(currentmode=="light"){
    currentmode="dark"
    document.querySelector("body").style.backgroundColor="black";
}else{
    currentmode="light";
    document.querySelector("body").style.backgroundColor="white";
}
console.log(currentmode);
});