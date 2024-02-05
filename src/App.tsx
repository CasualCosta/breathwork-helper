import './App.css'
// import { SessionContext } from './SessionContext'
import { SessionParameters } from './sessionParameters'
import { createContext } from 'react'

//Tomorrow I'll find a way to put this back into its own file
export const SessionContext = createContext<SessionParameters>({
  rounds: 3,
  breathCount: 30,
  breathInterval: 0.5,
  holdDuration: Array(3).fill(0)
})

function App() {
  return (
    <SessionContext.Provider value={{rounds: 3, breathCount: 30, breathInterval: 0.5, holdDuration: Array(3).fill(0)}}>
      <p>Test</p>
    </SessionContext.Provider>
  )
}

export default App
