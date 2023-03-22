import React from 'react'

const GameOverScreen = ({ score, setScore, setTimer, setIsGameOver, setIsGameStarted, setDifficulty, setSpeed, setColour, totalClicks, setTotalClicks, correctClicks, setCorrectClicks }) => {
  
    const handlePlayAgain = () => {
        setScore(0)
        setTimer(60)
        setIsGameOver(false)
        setTotalClicks(0)
        setCorrectClicks(0)
    }

    const handleRestart = () => {
        setScore(0)
        setTimer(60)
        setIsGameOver(false)
        setIsGameStarted(false)
        setDifficulty("")
        setSpeed("")
        setColour("")
        setTotalClicks(0)
        setCorrectClicks(0)
    }

    return (
    <div className="gameOverContainer">
        <h2>Game Over</h2>
        <p>score: {score}</p>
        <p>accuracy: {totalClicks ? parseInt((correctClicks/totalClicks) * 100) : "--"}%</p>
        <div className="gameOverBtns">
            <button tabIndex="0" className='gameStart' onClick={handlePlayAgain}>PLAY AGAIN</button>
            <button tabIndex="0" className='gameStart' onClick={handleRestart} >RESTART</button>
        </div>

    </div>
  )
}

export default GameOverScreen