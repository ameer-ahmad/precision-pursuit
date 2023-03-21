import React from 'react'

const StartScreen = () => {
  return (
    <div className="startContainer">
        <h2>Welcome to Precision Pursuit</h2>
        <p>a game to test your precision and reflexes</p>
        <div className="gameOptions">
          <select tabIndex="0" id="difficultySelect" name="difficulty-select" className="selectBox">
            <option value="" disabled selected> -- Select a Difficulty -- </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select tabIndex="0" id="speedSelect" name="speed-select" className="selectBox">
            <option value="" disabled selected> -- Select a Speed -- </option>
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
          </select>
          <select tabIndex="0" id="colourSelect" name="colour-select" className="selectBox">
            <option value="" disabled selected> -- Select a Colour -- </option>
            <option value="easy">Red</option>
            <option value="medium">Green</option>
            <option value="hard">Blue</option>
            <option value="easy">Yellow</option>
            <option value="medium">Purple</option>
            <option value="hard">Orange</option>
          </select>
        </div>
        <button tabIndex="0" className='gameStart'>START</button>
    </div>
  )
}

export default StartScreen