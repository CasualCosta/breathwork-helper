import './App.css'
import { useState } from 'react'
// import { SessionContext } from './SessionContext'
import { SessionContext } from './SessionContext'
import Setup from './components/setup'
import { sessionState } from './sessionParameters'

function App() {
  const [rounds, setRounds] = useState<number>(3)
  const [count, setCount] = useState<number>(30)
  const [interval, setInterval] = useState<number>(1)
  const [holds, setHolds] = useState<number[]>(Array(rounds).fill(0))
  const [state, setState] = useState<sessionState>(sessionState.Setup)

  return (
    <SessionContext.Provider value={{
      rounds: rounds, 
      setRounds: setRounds,
      count: count,
      setCount: setCount,
      interval: interval,
      setInterval: setInterval, 
      holds: holds,
      setHolds: setHolds,
      state: state,
      setState: setState
    }}>
      <Setup />
    </SessionContext.Provider>
  )
}

export default App
