import { useState } from 'react'

const Button = ({ text, handleClick }) => 
  <button onClick={handleClick}>
    {text}
  </button>

const StatisticsLine = ({ text, value }) => 
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) 
    return <p>No feedback given</p>
  
  const total = good + bad + neutral
  const averageRating = (good - bad) / total
  const positiveRate = good / total

  return <table>
    <tbody>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="all" value={total}/>
      <StatisticsLine text="average" value={averageRating}/>
      <StatisticsLine text="positive" value={`${positiveRate * 100} %`}/>
    </tbody>
  </table>
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleIncrGood = () => setGood(good + 1)
  const handleIncrNeutral = () => setNeutral(neutral + 1)
  const handleIncrBad = () => setBad(bad + 1)
 
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleIncrGood}/>
      <Button text="neutral" handleClick={handleIncrNeutral}/>
      <Button text="bad" handleClick={handleIncrBad}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App