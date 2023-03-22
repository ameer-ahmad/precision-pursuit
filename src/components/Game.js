import React, { useState } from 'react'
import TargetList from './TargetList'
import StartScreen from './StartScreen'

const Game = () => {

  const [isGameStarted, setIsGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState("")
  const [speed, setSpeed] = useState("")
  const [colour, setColour] = useState("")

  return (
    <div className="gameContainer">
      {isGameStarted ? (
        <TargetList difficulty={difficulty} speed={speed} colour={colour}/>
      ) : (
        <StartScreen 
        startGame={setIsGameStarted} 
        setDifficulty={setDifficulty}
        setSpeed={setSpeed}
        setColour={setColour}
        difficulty={difficulty} 
        speed={speed} 
        colour={colour}
        />
      )}
    </div>
  )
}

export default Game