import React, { useState } from 'react'
import TargetList from './TargetList'
import StartScreen from './StartScreen'
import GameHeader from './GameHeader'

const Game = () => {

  const [isGameStarted, setIsGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState("")
  const [speed, setSpeed] = useState("")
  const [colour, setColour] = useState("")
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(60)

  return (
    <div className="gameContainer">
      {isGameStarted ? (
        <>
          <GameHeader
          score={score}
          setScore={setScore}
          timer={timer}
          setTimer={setTimer} 
          />
          <TargetList 
          difficulty={difficulty} 
          speed={speed} 
          colour={colour}
          timer={timer}
          setTimer={setTimer}
        />
        </>
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