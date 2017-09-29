class TicTacToe {
    constructor() {
        this.CurrentSymbol="x";
        this.board= [];
        this.count_board=0;
        this.winner=null;

        for(let i=0;i<3;i++) {
            this.board[i]=[];
            for(let y=0;y<3;y++){
                this.board[i][y]=null;
            }

        }

    }
    getCurrentSymbol() {
        return this.CurrentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(rowIndex > 3 || columnIndex > 3 ){
            return null;
        } else {

            if(this.board[rowIndex][columnIndex] === null){
                this.board[rowIndex][columnIndex] = this.CurrentSymbol;
                this.count_board++;
            } else {
                return null;
            }

            for( var i = 0; i < 3; i++){
                if( (this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) ||
                    (this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) ||
                    (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) ||
                    (this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) )
                    {

                        this.winner = this.CurrentSymbol;
                    }
                }

            if(this.CurrentSymbol === 'x'){
                this.CurrentSymbol = 'o';
            } else {
                this.CurrentSymbol = 'x';
            }
        }

    }

    isFinished() {
        if(this.winner||this.noMoreTurns()){
        return true;
    }

    return false;

    }

    getWinner() {
        return this.winner;

    }

    noMoreTurns() {
        if (this.count_board === 9){
            return true;
        }

        return false;
    }

    isDraw() {
        if(this.noMoreTurns() && this.winner === null){
            return true;
    }
    else {
        return false;
    }
}

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
