import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  let [playerOne, setPlayerOne] = useState(true)
  let [playerTwo, setPlayertwo] = useState(false)

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...squares]
    if(playerOne){
      updateBoard[clickedSquare] = true ? "X" : "O"
      setSquares(updateBoard)
      playerOne = false
      setPlayerOne(playerOne)
      playerTwo = true
      setPlayertwo(playerTwo)
    }
    else if(playerTwo){
      updateBoard[clickedSquare] = true ? "O" : "X"
      setSquares(updateBoard)
      playerOne = true
      setPlayerOne(playerOne)
      playerTwo = false
      setPlayertwo(playerTwo)
    }
    else {
      return "error"
    }
  }
    function calculateWinner(squares) {
      const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){

        alert("You Win");
      }
      // winCon1: [squares[0], squares[1], squares[2]],
      // winCon2: [squares[3], squares[4], squares[5]],
      // winCon3: [squares[6], squares[7], squares[8]],
      // winCon4: [squares[0], squares[3], squares[6]],
      // winCon5: [squares[1], squares[4], squares[7]],
      // winCon6: [squares[2], squares[5], squares[8]],
      // winCon7: [squares[0], squares[4], squares[8]],
      // winCon8: [squares[2], squares[4], squares[6]]

    }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {squares.map((square, index) => {
        return(
          <Square 
          square={square}
          index={index} 
          handleGamePlay={handleGamePlay}/> 
          )
        })}
      </div>
    </>
  )
}
}
export default App