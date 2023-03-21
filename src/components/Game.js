import React from 'react'
import Target from './Target'
import StartScreen from './StartScreen'

const Game = () => {
  return (
    <div className="gameContainer">
        <StartScreen />
        <Target />
    </div>
  )
}

export default Game