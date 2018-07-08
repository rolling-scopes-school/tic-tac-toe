class TicTacToe {
    let currentPlayer=1;    //This variable helps to keep track of whose chance it is to play
    constructor() {

    }
    //getCurrentPlayerSymbol function helps in checking whose chance it is to play
    getCurrentPlayerSymbol() {
        if (currentPlayer%2==0)
            return 0;   //let 0 here mean 'O's chance
        else
            return 1;   //let 1 here mean '1's chance
        
    }

    nextTurn(rowIndex, columnIndex) {

    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
