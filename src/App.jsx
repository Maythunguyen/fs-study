import { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const total = good + neutral + bad
    const average = total ? (good - bad) / total : 0
    const positive = total ? (good / total) * 100 : 0

    return (
        <div>
          <h1>give feedback</h1>

          <Button onClick={() => setGood(g => g + 1)} text="good" />
          <Button onClick={() => setNeutral(n => n + 1)} text="neutral" />
          <Button onClick={() => setBad(b => b + 1)} text="bad" />

          <h1>statistics</h1>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={total}
            average={average}
            positive={positive}
          />
        </div>
    )
}

export default App

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    if (all === 0) return <div>No feedback given</div>

    return (
      <div>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {all}</div>
        <div>average {average}</div>
        <div>positive {positive} %</div>
      </div>
    )
}
