//conditional ststements 
let a =prompt("what your age ?");
a=Number.parseInt(a);

if(a<0){
    alert("valid age");
}
else if(a<18){
    alert("you are not eligible");

}
else{

    alert("invalid age")
}