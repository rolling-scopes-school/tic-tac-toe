const TicTacToe = require('./src/tic-tac-toe.js');

window.game = new TicTacToe();

resetBtn.addEventListener('click', () => {
    window.game = new TicTacToe();
    render();
});

function render() {
    let html = '';

    for (let i = 0; i < 3; i++) {
        html += '<div class="row">';

        for (let j = 0; j < 3; j++) {
            html += `<div class="column">${game.getFieldValue(i, j) || ''}</div>`;
        }

        html += '</div>';
    }

    gameCanvas.innerHTML = html;
}

render();

gameCanvas.addEventListener('click', e => {
    if (!e.target.classList.contains('column')) {
        return;
    }

    const rowIndex = Array.from(gameCanvas.children).indexOf(e.target.parentNode);
    const colIndex = Array.from(e.target.parentNode.children).indexOf(e.target);

    game.nextTurn(rowIndex, colIndex);

    const winner = game.getWinner();
    const isDraw = game.isDraw();

    render();

    if (winner) {
        setTimeout(() => {
            alert(`${winner} won!`);
            window.game = new TicTacToe();
            render();
        }, 10)
    }

    if (isDraw) {
        setTimeout(() => {
            alert(`It's a draw`);
            window.game = new TicTacToe();
            render();
        }, 10);
    }
})
