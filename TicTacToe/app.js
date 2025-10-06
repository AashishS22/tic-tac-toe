let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-conatiner");
let msg = document.querySelector("#msg");

let turnX = true; //playerX, playerO


// creating a 2D arrey of wining patters
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetBtn = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// step 3 adding event listner on buttons for turn of X & O
boxes.forEach((box) =>{
    box.addEventListener('click', () =>{
        if (turnX) {
            box.innerText ="X";
            turnX =false;
        } else {
            box.innerText ="O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations ..!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if ( pos1Val === pos2Val && pos2Val === pos3Val){
         showWinner(pos1Val);
        }
    }
};