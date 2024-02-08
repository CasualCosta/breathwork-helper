import { useContext } from "react"
import SetupInput from "./SetupInput"
import { SessionContext } from "../SessionContext"
import { sessionState } from "../sessionParameters"

const Setup = () => {
  if(useContext(SessionContext)!.state !== sessionState.Setup)
    return <></>
  
  return (
    <div>
      <SetupInput type="roundAmount" />
      <SetupInput type="breathCount" />
      <SetupInput type="breathInterval" />
    </div>
  )
}

export default Setup