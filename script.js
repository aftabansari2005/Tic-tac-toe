let boxes=document.querySelectorAll(".box");
let rstbt=document.querySelector(".reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let resetbtn=document.querySelector(".reset-btn");
let restartbtn=document.querySelector(".restart-btn")
let turn0=true;
let count=1;
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



  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
      box.classList.remove("player-o", "player-x"); 
    }
  };
 const gamedraw=()=>{
    msg.innerText="Game has been draw!";
    msgContainer.classList.remove("hide");
    msgContainer.style.animation = "winner-animation 1s ease-in-out forwards";
    disableBoxes();
 }

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText="O";
            box.classList.add("player-o");
            turn0=false;
        }
        else{
            box.innerText="X";
            box.classList.add("player-x");
            turn0=true;
        }
        box.disabled="true";
        count++;
        const isWinner=checkWinner();
        if(count==9 && !isWinner){
            gamedraw();

        }

    });
  })
const  checkWinner= ()=>{
    for (const pattern of winPatterns) {
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if (posval1!="" && posval2!="" && posval3!=""){
            if(posval1==posval2 && posval2==posval3){
                 showWinner(posval1);
                 return true;
     
             }
        }

    }
};
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgContainer.style.animation = "none"; 
  };
  
const showWinner=(winner)=>{
    msg.innerText=`Congratulations ! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msgContainer.style.animation = "winner-animation 1s ease-in-out forwards";
    disableBoxes();
}
resetbtn.addEventListener("click",resetGame);
restartbtn.addEventListener("click",resetGame);