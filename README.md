### Tic Tac Toe

---
⚠️ DO NOT SUBMIT PRS WITH SOLUTIONS TO THIS REPO ⚠️

### Description

Your task is to implement `TicTacToe` class

#### Methods:

##### `getCurrentPlayerSymbol()`
should return `x` or `o`

##### `nextTurn(row, col)`
should properly update class state (change current player, update marks storage etc.)

##### `isFinished()`
should return true if game is finished (e.g. there is a winner or it is a draw)

##### `getWinner()`
should return winner symbol (`x` or `o`) or null if there is no winner yet

##### `noMoreTurns()`
should return true if there is no more fields to place a `x` or `o`

##### `isDraw()`
should return true if there is no more turns and no winner

##### `getFieldValue(row, col)`
should return `matrix[row][col]` value (if any) or `null`

### Prerequisites
* Install [nodejs](https://nodejs.org/en/) (>= v6.9.4)
* open bash in this folder
* `npm install`

### Run tests
```sh
npm test
```

### Run in browser
```sh
npm start
```

open http://localhost:8080

---

© [R1ZZU](https://github.com/R1ZZU)
