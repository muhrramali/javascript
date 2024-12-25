/*
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-Btn");
let NewGamebtn=document.querySelector("#New-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [6,4,2],
     [0,4,8]
];
const resetGame=()=>{
    let turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
     if(turnO){
        box.innerText="O";
        turnO=false;
     }else{
        box.innerText="X";
        turnO=true;
     }
     box.Disabled=true;
     checkwinner();
    });
});
const DisabledBoxes=()=>{
    for(let box of boxes){
        box.Disabled=true;
    }
};
const enabledBoxes=()=>{
    for(let box of boxes){
        box.Disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
msg.innerText=`congurlation,winner is ${winner}`;
msgContainer.classList.remove("hide");
DisabledBoxes();
}
const checkwinner=()=>{
    for( let pattern of winpatterns){
       /* console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[2]].innerText,
            boxes[pattern[2]].innerText);
            let postion1val= boxes[pattern[0]].innerText;
            let postion2val= boxes[pattern[1]].innerText;
            let postion3val= boxes[pattern[2]].innerText;
            if(postion1val!="" &&postion2val!=""&&postion3val!=""){
                if(postion1val===postion2val &&postion2val===postion3val){
                    console.log("winner",postion1val)
            showWinner(postion1val);
                }
        
            }
    }
};
NewGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame); */
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);