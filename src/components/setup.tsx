import { useContext } from "react"
import SetupForm from "./SetupForm"
import { SessionContext } from "../SessionContext"
import { SessionState } from "../sessionParameters"

const Setup = () => {
  const setState = useContext(SessionContext)!.setState
  const setCurrentRound = useContext(SessionContext)!.setCurrentRound
  function start() {
    setState(SessionState.Preparation)
    setCurrentRound(0)
  }

  if(useContext(SessionContext)!.state !== SessionState.Setup)
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