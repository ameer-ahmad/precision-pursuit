import React from 'react'

const GameHeader = ({ score, setScore, timer, setTimer }) => {
  return (
    <div className="gameHeaderContainer">
        <p>score: {score}</p>
        <p>Timer: {timer}s</p>
    </div>
  )
}

export default GameHeader