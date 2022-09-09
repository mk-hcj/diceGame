
let playerOne = Math.floor(Math.random()* 6) + 1;
let playerTwo = Math.floor(Math.random()* 6) + 1;

let diceOne = document.getElementsByClassName('img1');
let diceTwo = document.getElementsByClassName('img2');


diceChanger(diceOne,playerOne);
diceChanger(diceTwo,playerTwo);


function diceChanger(i, num) {
    if (num === 1){
        return i[0].setAttribute("src", "images/dice1.png");
    } else if (num === 2){
        return i[0].setAttribute("src", "images/dice2.png");
    } else if (num === 3){
        return i[0].setAttribute("src", "images/dice3.png");
    } else if (num === 4){
        return i[0].setAttribute("src", "images/dice4.png");
    } else if (num === 5){
        return i[0].setAttribute("src", "images/dice5.png");
    } else {
        return i[0].setAttribute("src", "images/dice6.png");
    }
    }


let scoreBoard = document.querySelector("h1");
if (playerOne > playerTwo){
    scoreBoard.innerText = "🚩 Player 1 Wins!"
} else if (playerOne < playerTwo) {
    scoreBoard.innerText = "Player 2 Wins! 🚩"
} else {
    scoreBoard.innerText = "🚩 Draw!  🚩"
}