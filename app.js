let cells = document.querySelectorAll('.row>div');


let countCellClicks = 0
let msg = document.querySelector('.game-status');
let msgText = msg.textContent



for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}



function cellClicked() {

    countCellClicks++;

    if (countCellClicks % 2 === 1) {

        event.target.textContent = 'X';
        detectWin();

    } else {
        event.target.textContent = 'O';
        detectWin()

    }
}

function detectWin() {

    let cell0 = document.getElementById('0').textContent
    let cell1 = document.getElementById('1').textContent
    let cell2 = document.getElementById('2').textContent
    let cell3 = document.getElementById('3').textContent
    let cell4 = document.getElementById('4').textContent
    let cell5 = document.getElementById('5').textContent
    let cell6 = document.getElementById('6').textContent
    let cell7 = document.getElementById('7').textContent
    let cell8 = document.getElementById('8').textContent


    if (cell0 == cell1 && cell1 == cell2 && cell0 !== '') {
        msg.textContent = 'Won!';
    }
    else if (cell3 == cell4 && cell4 == cell5 && cell3 !== '') {
        msg.textContent = 'Won!'
    } else if (cell6 == cell7 && cell7 == cell8 && cell6 !== '') {
        msg.textContent = 'Won!'
    } else if (cell0 == cell4 && cell4 == cell8 && cell0 !== '') {
        msg.textContent = 'Won!'
    } else if (cell2 == cell4 && cell4 == cell6 && cell2 !== '') {
        msg.textContent = 'Won!'
    } else if (cell0 == cell3 && cell3 == cell6 && cell0 !== '') {
        msg.textContent = 'Won!'
    } else if (cell1 == cell4 && cell4 == cell7 && cell1 !== '') {
        msg.textContent = 'Won!'
    } else if (cell2 == cell5 && cell5 == cell8 && cell2 !== '') {
        msg.textContent = 'Won!'
    } else if (cell0 !== '' && cell1 != '' && cell2 != '' && cell3 != ''&&cell4 !=''&& cell5 != ''&& cell6 != '' && cell7!= '' && cell8 !='') {
        msg.textContent = 'Draw'
    }
}



