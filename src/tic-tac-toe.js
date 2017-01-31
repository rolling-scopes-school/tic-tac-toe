class TicTacToe {
    constructor() {
        this[Symbol.for('board')] = new Array(9).fill(null);
        this[Symbol.for('currentPlayer')] = 'x';
        this[Symbol.for('winner')] = null;
    }

    getCurrentPlayerSymbol() {
        return this[Symbol.for('currentPlayer')];
    }

    nextTurn(rowIndex, colIndex) {
        // Just to save typing
        const board = this[Symbol.for('board')];
        const symbol = this.getCurrentPlayerSymbol();

        // 3 is a magic number to save on 1d vs 2d array
        // Actually it represents colNumber
        if (!board[rowIndex * 3 + colIndex]) {
            board[rowIndex * 3 + colIndex] = symbol;

            // Check if any of the winning sets is reached
            if ([
                    [board[0], board[4], board[8]],
                    [board[2], board[4], board[6]],
                    [board[0], board[1], board[2]],
                    [board[3], board[4], board[5]],
                    [board[6], board[7], board[8]],
                    [board[0], board[3], board[6]],
                    [board[1], board[4], board[7]],
                    [board[2], board[5], board[8]]
                ].some(set => set[0] === symbol && set[1] === symbol && set[2] === symbol)) {
                this[Symbol.for('winner')] = symbol;
            }

            this[Symbol.for('currentPlayer')] = (this[Symbol.for('currentPlayer')] === 'x')
                ? 'o'
                : 'x';
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        return this[Symbol.for('winner')];
    }

    noMoreTurns() {
        return !this[Symbol.for('board')].includes(null);
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this[Symbol.for('board')][rowIndex * 3 + colIndex];
    }
}

module.exports = TicTacToe;
