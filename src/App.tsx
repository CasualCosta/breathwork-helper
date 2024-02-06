import './App.css'
// import { SessionContext } from './SessionContext'
import { SessionContext } from './SessionContext'
import Setup from './components/setup'

function App() {
  return (
    <SessionContext.Provider value={{rounds: 3, breathCount: 30, breathInterval: 0.5, holdDuration: Array(3).fill(0)}}>
      <Setup />
    </SessionContext.Provider>
  )
}

export default App
