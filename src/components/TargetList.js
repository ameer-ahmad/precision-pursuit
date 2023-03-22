import React, { useState, useEffect, useRef} from 'react'

const TargetList = ({ difficulty, speed, colour, setTimer, setScore, setIsGameOver }) => {

  const [targets, setTargets] = useState([])

  const targetRef = useRef(null)

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      const target = generateTarget()
      setTargets(prev => [...prev, target])
    }, 500)

    const intervalId2 = setInterval(() => {
      setTargets(prev => {
        if (prev.length === 0) {
          return prev
        } 
        return prev.slice(1)
      })
    }, (speed === "fast" ? 750 : speed === "normal" ? 1500 : 2500))

    const intervalId3 = setInterval(() => {
      setTimer(prev => {
        if (prev === 0) {
          clearInterval(intervalId1)
          clearInterval(intervalId2)
          setIsGameOver(true)
          return prev
        }
        return prev-1

      })
    }, 1000)

    return () => {
      clearInterval(intervalId1)
      clearInterval(intervalId2)
      clearInterval(intervalId3)
    }

  }, [])

  const generateTarget = () => {
    const targetRect = targetRef.current.getBoundingClientRect()
    const width = targetRect.width
    const height = targetRect.height
    const radius = (difficulty === "hard" ? 10 : difficulty === "medium" ? 25 : 40)
    const x = Math.floor(Math.random() *(width - (radius *3))) + targetRect.x 
    const y = Math.floor(Math.random() * (height - (radius * 3))) + targetRect.y

    const targetStyle = {
      position: "absolute",
      width:`${radius * 2}px`,
      height: `${radius * 2}px`,
      borderRadius: "50%",
      backgroundColor: colour,
      left: `${x}px`,
      top: `${y}px`
    }

    return targetStyle
  }

  const handleTargetClick = (e) => {
    let multiplier
    switch (difficulty) {
      case "hard":
        multiplier = 3
        break
      case "medium":
        multiplier = 2
        break
      case "easy":
        multiplier = 1
        break
      default:
        multiplier = 1
    }
    setScore(prev => prev + 1*multiplier)

    setTargets(prev => {
      return prev.filter((target, index) => {

        return index !== parseInt(e.target.id.slice(1))
      })
    })
  }

  return (
    <div className="targetContainer" ref={targetRef}> 
      { targets.length ?
      
      targets.map((target, index) => {
        return (<div onClick={handleTargetClick} style={target} id={`t${index}`} key={index}></div>)
      }) : null}
    </div>
  )
}

export default TargetList