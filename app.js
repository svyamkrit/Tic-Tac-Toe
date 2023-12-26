let boxes = document.querySelectorAll(".box");
resetBtn = document.querySelector("#reset-btn");
winnerMsg = document.querySelector(".winner-msg");
msg = document.querySelector("#msg");

let drawCount = 1;

let turnO = true;

// winning pattrens
let winPttrn = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// turn function 

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    
    box.disabled = true;
    checkWinner();
    
    console.log(`button was clicked ${drawCount} times.`);
    drawCount ++;
    
    

  });
});

// disable button

const disableBtns = (box) => {
  for (let box of boxes) {
    box.disabled = true;
  }
};


// enable button

const enableBtns = (box) => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

// show winner function

const showWinner = (winner) => {
  msg.innerText = `Congratulations! The winner is ${winner}!`;
  winnerMsg.classList.remove("hide");
  disableBtns();
};

const showDraw = () => {
  msg.innerText = "The game is drawn! Wanna Play again?";
  winnerMsg.classList.remove("hide");
  disableBtns();
};

// reset winning message!

const resetWinnerMessage = () => {
  msg.innerText = "";
};

// reset draw counter

const resetDraw = () => {
  drawCount = 1;
}


// checking winner condition

const checkWinner = () => {
  for (let pattern of winPttrn) {
    let value1 = boxes[pattern[0]].innerText;
    let value2 = boxes[pattern[1]].innerText;
    let value3 = boxes[pattern[2]].innerText;

    if (value1 === value2 && value2 === value3 && value1 !== "") {
      console.log(`${value1} is the winner!`);
      showWinner(value1);

      return;
    }

    else{
      if (drawCount === 9 && value1 !== value2 && value2 !== value3 && value1 !== "") {
        showDraw();
      }
    }
  }
};




// reset button

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  
  turnO = true;
  resetWinnerMessage();
  resetDraw();
  enableBtns();
  console.log("Game reset!");
});
