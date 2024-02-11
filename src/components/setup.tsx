import { useContext } from "react"
import SetupItem from "./SetupItem"
import { SessionContext } from "../SessionContext"
import { SessionState } from "../sessionParameters"

const Setup = () => {
  const context = useContext(SessionContext)!
  const setState = context.setState
  const setCurrentRound = context.setCurrentRound
  const setHolds = context.setHolds
  const maxRounds = context.maxRounds
  function start() {
    setState(SessionState.Preparation)
    setCurrentRound(0)
    resetHolds()
  }

  function resetHolds(){
    const newHolds = Array(maxRounds).fill(0)
    setHolds(newHolds)
  }
  if(context.state !== SessionState.Setup)
    return <></>
  return (
    <div className="bg-green-600 rounded w-6/12 h-6/12 py-8 top-6/12 text-white">
      <div className="flex flex-col items-center gap-2 px-4 py-4">
        <SetupItem type="roundAmount" />
        <SetupItem type="breathCount" />
        <SetupItem type="breathInterval" />
      </div>
      <button 
        className="bg-emerald-800 rounded px-4"
        onClick={() => start()}
      >
        Start
      </button>
    </div>
  )
}

export default Setup