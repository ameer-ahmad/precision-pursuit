import React, { useState, useEffect, useRef} from 'react'

const TargetList = ({ difficulty, speed, colour }) => {

  const [targets, setTargets] = useState([])

  const targetRef = useRef(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const target = generateTarget()
      setTargets(prev => [...prev, target])
      console.log("I fire once")
    }, (speed === "slow" ? 2000 : speed === "normal" ? 1500 : 1000))

    return () => {
      clearInterval(intervalId)
    }

  }, [])

  const generateTarget = () => {
    const targetRect = targetRef.current.getBoundingClientRect()
    const width = targetRect.width
    const height = targetRect.height
    const radius = (difficulty === "hard" ? 10 : difficulty === "medium" ? 25 : 40)
    const x = Math.floor(Math.random() *(width - radius *2)) + targetRect.x
    const y = Math.floor(Math.random() * (height - radius * 2)) + targetRect.y

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

  return (
    <div className="targetContainer" ref={targetRef}> 
      { targets.length ?
      
      targets.map((target, index) => {
        return (<div style={target} key={index} ></div>)
      }) : null}
    </div>
  )
}

export default TargetList