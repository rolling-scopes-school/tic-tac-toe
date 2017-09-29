
class TicTacToe {
    constructor() {
        this.turn = 0;
        this.currentPlayer = null;
        this.gameField = new Array();
        for (let i = 0; i < 3; i++) {
            this.gameField[i] = new Array();
            for (let j = 0; j < 3; j++) {
                this.gameField[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        if (!this.currentPlayer) {
            return 'x';
        }
        else if (this.currentPlayer == 'o') {
            return 'x';
        }
        else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.getFieldValue(rowIndex,columnIndex)) {
            this.currentPlayer = this.getCurrentPlayerSymbol();
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            this.turn++;
        }
    }

    isFinished() {
        return (this.getWinner() || this.isDraw()) ? true : false;
    }

    getWinner() {
        let x = 0, y = 0, zx = 0, zy = 0;
        for (let i = 0; i < 3; i ++) {
            x = 0;
            y = 0;         
            if (this.gameField[i][i] === this.currentPlayer) {
                zy++;
            }
            if (this.gameField[i][2-i] === this.currentPlayer) {
                zx++;
            }
            for (let j = 0; j < 3; j++) {
                if (this.gameField[i][j] === this.currentPlayer) {
                    x++;
                }
                if(this.gameField[j][i] === this.currentPlayer) {
                    y++;
                }
            }
            if (x === 3 || y === 3) return this.currentPlayer;
        }
        if (zy === 3 || zx === 3) return this.currentPlayer;

        return null;
    }

    noMoreTurns() {
        return (this.turn === 9) ? true : false;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
