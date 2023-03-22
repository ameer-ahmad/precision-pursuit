import React from 'react'

const StartScreen = ({ startGame, setDifficulty, setSpeed, setColour, difficulty, speed, colour }) => {

  const handleStartGame = () => {
    if (difficulty === "" || colour === "" || speed === "") {
      alert("Please select a difficulty, speed, and colour.")
    } else {
      startGame(true)
    }
    
  }

  const handleSelection = (e) => {
    switch (e.target.name) {
      case "difficulty-select":
        setDifficulty(e.target.value)
        break
      case "speed-select":
        setSpeed(e.target.value)
        break
      case "colour-select":
        setColour(e.target.value)
        break
      default:
        setDifficulty("")
        setSpeed("")
        setColour("")
    }
  }

  return (
    <div className="startContainer">
        <h2>Welcome to Precision Pursuit</h2>
        <p>a game to test your precision and reflexes</p>
        <div className="gameOptions">
          <select onChange={handleSelection} tabIndex="0" id="difficultySelect" name="difficulty-select" className="selectBox">
            <option value="" disabled selected> -- Select a Difficulty -- </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select onChange={handleSelection} tabIndex="0" id="speedSelect" name="speed-select" className="selectBox">
            <option value="" disabled selected> -- Select a Speed -- </option>
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
          </select>
          <select onChange={handleSelection} tabIndex="0" id="colourSelect" name="colour-select" className="selectBox">
            <option value="" disabled selected> -- Select a Colour -- </option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <button tabIndex="0" className='gameStart' onClick={handleStartGame}>START</button>
    </div>
  )
}

export default StartScreen