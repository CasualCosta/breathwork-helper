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
    <div className="w-96 h-96 mt-36 flex flex-col justify-center items-center text-lg text-slate-100 relative bg-green-600 rounded-3xl h-6/12 py-8 top-6/12 ">
      <p className="text-3xl my-8">BREATHWORK HELPER</p>
      <div className="flex flex-col items-center gap-2 px-4 py-4">
        <SetupItem type="roundAmount" />
        <SetupItem type="breathCount" />
        {/* <SetupItem type="breathInterval" /> */}
      </div>
      <button 
        className="bg-emerald-800 rounded px-4 mt-4 hover: hover:scale-110 hover:bg-emerald-700 duration-300"
        onClick={() => start()}
      >
        Start
      </button>
      <a 
        className="my-4 text-lg text-red-100"
        href="https://www.wimhofmethod.com/breathing-exercises"
        target="_blank"
      >
        READ BEFORE STARTING!
      </a>
    </div>
  )
}

export default Setup