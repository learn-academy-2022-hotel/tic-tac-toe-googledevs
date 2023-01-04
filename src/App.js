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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        alert("You Win");
      }
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
      <br />
      <button onClick={() => window.location.reload(false)} className="playagain">Play Again!</button>
    </>
  )
}

export default App