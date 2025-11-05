import { useState } from 'react'
import './App.css'

function App() {

  const [turn, setTurn] = useState(0) // 1 = player 1, 2 = player 2
  const [squares, setSquares] = useState(new Array(9).fill(null))
  const [playerWin, setPlayerWin] = useState(null)
  const winningCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


  const players = {
    0: {
      alias: "Jugador 1",
      icon: "✖️"
    },
    1: {
      alias: "Jugador 2",
      icon: "⭕"
    }
  }

  function checkWin(board, icon){
    return winningCombination.some(combo => combo.every(i => board[i] === icon))
  }


  function selectChart(_, index) {
    if (squares[index] !== null || playerWin) return
    const currentPlayer = players[turn]
    const newSquares = [...squares]
    newSquares[index] = currentPlayer.icon
    setSquares(newSquares)

    if (checkWin(newSquares, currentPlayer.icon)) {
      setPlayerWin(currentPlayer.alias)
      return
    }

    if(newSquares.every(cell => cell != null)) {
      setPlayerWin('Empate')
      return
    }

    setTurn(1 - turn)
  }

  function resetGame() {
    setSquares(new Array(9).fill(null))
    setTurn(0)
    setPlayerWin(null)
  }

  return (
    <div className='container-app'>
      <h1>Tic Tac Toe</h1>
      <div className='container-players'>
        <div className={`${turn == 0 && 'player-select'}`}>
          <span className='player'>{players[0].alias} | {players[0].icon}</span>
        </div>
        <div className={`${turn == 1 && 'player-select'}`}>
          <span className='player'>{players[1].alias} | {players[1].icon}</span>
        </div>
      </div>

      <div className={`container-game ${playerWin && 'container-game-final'}`}>
        {
          squares.map((chart, index) => {
            return (
              <div
                key={index}
                className='chart'
                onClick={(prop) => selectChart(prop, index)}
              >
                {chart}
              </div>
            )
          })
        }
      </div>
      { playerWin && (
        <div className='info-winner-player'>
          <p>🏆: {playerWin} </p>
          <button onClick={resetGame} className='button-reset-game'>Reset</button>
        </div>
      )}
    </div>
  )
}

export default App
