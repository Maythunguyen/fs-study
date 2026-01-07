import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)
  console.log('rendering with counter value', counter)

  const setToZero = () => {

    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  
  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () =>{
    setAllClicks(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight) 
  }

  return (
    <div>
      {right}
      <Display counter={counter} />
      <Button onClick={handleRightClick} text="right" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={handleLeftClick} text="left" />
      {left}
      <History allClicks={allClicks} />
    </div>
  )
} 

export default App

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const History = (props) => {
    if(props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
} 