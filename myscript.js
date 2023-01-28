//dados iniciais
let userTurn;
let gameEnd = false;

//eventos
document.querySelectorAll(".item").forEach((value)=> value.addEventListener("click", mark));
document.querySelector(".reset").addEventListener("click", reset);

//funções
function firstPlayer() {
    let turn = Math.floor(Math.random() * 2);
    userTurn = turn == 0 ? "x" : "o";
    document.querySelector(".vez").innerHTML = userTurn;
}

function mark(e) {
    let square = e.currentTarget;
    if(square.innerHTML || gameEnd) return;

    square.innerHTML = userTurn;

    if(checkWinner()) {
        winner(userTurn);
    } else if(checkDraw()) {
        winner();
    } else {
        changeTurn();
    }
    
}

function checkWinner() {

    let a1 = document.querySelector(`div[data-item="a1"]`).innerHTML;
    let a2 = document.querySelector(`div[data-item="a2"]`).innerHTML;
    let a3 = document.querySelector(`div[data-item="a3"]`).innerHTML;
    let b1 = document.querySelector(`div[data-item="b1"]`).innerHTML;
    let b2 = document.querySelector(`div[data-item="b2"]`).innerHTML;
    let b3 = document.querySelector(`div[data-item="b3"]`).innerHTML;
    let c1 = document.querySelector(`div[data-item="c1"]`).innerHTML;
    let c2 = document.querySelector(`div[data-item="c2"]`).innerHTML;
    let c3 = document.querySelector(`div[data-item="c3"]`).innerHTML;

    if(a1 == userTurn && a2 == userTurn && a3 === userTurn) {
        console.log(1);
        return true;
    } else if(b1 == userTurn && b2 == userTurn && b3 === userTurn) {
        console.log(2);
        return true;
    } else if(c1 == userTurn && c2 == userTurn && c3 === userTurn) {
        console.log(3);
        return true;
    }  else if(a1 == userTurn && b1 == userTurn && c1 === userTurn) {
        console.log(4);
        return true
    } else if(a2 == userTurn && b2 == userTurn && c2 === userTurn) {
        console.log(5);
        return true
    } else if(a3 == userTurn && b3 == userTurn && c3 === userTurn) {
        console.log(6);
        return true
    } else if(a1 == userTurn && b2 == userTurn && c3 === userTurn) {
        console.log(7);
        return true
    } else if(c1 == userTurn && b2 == userTurn && a3 === userTurn) {
        console.log(8);
        return true
    }

    return false;
}

function changeTurn() {
    userTurn = userTurn == "x" ? "o" : "x";
    document.querySelector(".vez").innerHTML = userTurn;
}

function winner(userWinner) {
    
    if(userWinner) {
        document.querySelector(".resultado").innerHTML = `O "${userWinner}" venceu.`;
    } else {
        document.querySelector(".resultado").innerHTML = "EMPATE!";
    }

    gameEnd = true;
    document.querySelector(".vez").innerHTML = "--";
}

function checkDraw() {
    let boxes = [];
    document.querySelectorAll(".item").forEach(value => {
        boxes.push(value.innerHTML);
    });

    return boxes.every(value => value != "");
}

function reset() {
    gameEnd = false;
    firstPlayer();
    document.querySelectorAll(".item").forEach(value => value.innerHTML = "");
    document.querySelector(".resultado").innerHTML = "--";

}

firstPlayer();