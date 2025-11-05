import { useState } from 'react'
import './App.css'

function App() {

  const [turn, setTurn] = useState(0) // player 1
  const [charts, setCharts] = useState(new Array(9).fill(null))
  const [playerWin, setPlayerWin] = useState(null)
  const winningCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


  const players = {
    "1": {
      alias: "Jugador 1",
      icon: "✖️"
    },
    "2": {
      alias: "Jugador 2",
      icon: "⭕"
    }
  }

  function searchWinPlayer(winningCombination, playerCombination) {
    for (let index = 0; index < winningCombination.length; index++) {
      const winning = winningCombination[index];
      let win = 0
      for (let index = 0; index < playerCombination.length; index++) {
        const element = playerCombination[index];
        if (winning.includes(element)) {
          win += 1
        }
      }

      if (win == 3) {
        return true
        // setPlayerWin(player.alias)
        // break
      }
    }
  }

  function selectChart(prop, index) {
    if (charts[index] !== null || playerWin) {
      return
    }

    const player = turn == false ? players[1] : players[2]
    const copyCharts = charts
    copyCharts[index] = player.icon
    setCharts(copyCharts)

    const playerCombination = []

    charts.filter((plays, index) => {
      if (plays == player.icon) {
        playerCombination.push(index)
      }
    })

    const winPlayer = searchWinPlayer(winningCombination, playerCombination)

    if (winPlayer) {
      setPlayerWin(player.alias)
    } else {
      setTurn(!turn)
    }
  }

  function resetGame() {
    charts.fill(null)
    setTurn(false)
    setPlayerWin(null)
  }

  return (
    <div className='container-app'>
      <h1>Tic Tac Toe</h1>
      <div className='container-players'>
        <div className={`${turn == 0 && 'player-select'}`}>
          <span className='player'>{players[1].alias} | {players[1].icon}</span>
        </div>
        <div className={`${turn == 1 && 'player-select'}`}>
          <span className='player'>{players[2].alias} | {players[2].icon}</span>
        </div>
      </div>

      <div className={`container-game ${playerWin && 'container-game-final'}`}>
        {
          charts.map((chart, index) => {
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
