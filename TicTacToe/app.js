let boxes = document.querySelectorAll(".box");

let turnX = true; //playerX, playerO


// creating a 2D arrey of wining patters
const winPetterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener('click', () =>{
        if (turnX) {
            box.innerText ="X";
            turnX =false;
        } else {
            box.innerText ="O";
            turnX = true;
        }
    })
})
