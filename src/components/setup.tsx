import { useContext } from "react"
import SetupForm from "./SetupForm"
import { SessionContext } from "../SessionContext"
import { SessionState } from "../sessionParameters"

const Setup = () => {
  const context = useContext(SessionContext)!
  const setState = context.setState
  const setCurrentRound = context.setCurrentRound
  const setHolds = context.setHolds
  const holds = context.holds
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
    <div>
      <SetupForm type="roundAmount" />
      <SetupForm type="breathCount" />
      <SetupForm type="breathInterval" />
      <button onClick={() => start()}>
        Start
      </button>
    </div>
  )
}

export default Setup