import './App.css'
import { useState } from 'react'
// import { SessionContext } from './SessionContext'
import { SessionContext } from './SessionContext'
import { SessionState } from './sessionParameters'
import Setup from './components/Setup'
import Preparation from './components/Preparation'
import Breathe from './components/Breathe'

function App() {
  const [rounds, setRounds] = useState<number>(3)
  const [currentRound, setCurrentRound] = useState<number>(0)
  const [count, setCount] = useState<number>(30)
  const [interval, setInterval] = useState<number>(1)
  const [holds, setHolds] = useState<number[]>(Array(rounds).fill(0))
  const [state, setState] = useState<SessionState>(SessionState.Setup)

  return (
    <SessionContext.Provider value={{
      maxRounds: rounds, 
      setMaxRounds: setRounds,
      currentRound: currentRound,
      setCurrentRound: setCurrentRound,
      maxCount: count,
      setMaxCount: setCount,
      interval: interval,
      setInterval: setInterval, 
      holds: holds,
      setHolds: setHolds,
      state: state,
      setState: setState
    }}>
      <Setup />
      <Preparation />
      <Breathe />
      {/* <div>State: {state}</div> */}
    </SessionContext.Provider>
  )
}

export default App
