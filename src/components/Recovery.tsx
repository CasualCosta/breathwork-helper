import React, {useContext, useEffect, useState} from 'react'
import { SessionContext } from '../SessionContext'
import { SessionState } from '../sessionParameters'

const Recovery = () => {
    const context = useContext(SessionContext)!
    const state = context.state
    const setState = context.setState
    const currentRound = context.currentRound
    const setCurrentRound = context.setCurrentRound
    const maxRounds = context.maxRounds
    const [seconds, setSeconds] = useState<number>(0)

    useEffect(() => {
        if(context.state  !== SessionState.Recovery)
            return
        
        if(seconds < 1){
            setTimeout(() => setSeconds(seconds + 1), 1000);
            return
        }
        console.log(`Current round + 1: ${currentRound + 1}; Max rounds: ${maxRounds}.`)
        setState(currentRound + 1 < maxRounds ? SessionState.Preparation : SessionState.Results)
        setCurrentRound(currentRound + 1)
        setSeconds(0)
    })
    
    if(state !== SessionState.Recovery)
        return <></>
    return (
        <div className='bg-teal-900 z-2 w-96 h-96 mt-36 h-4/12 flex flex-col justify-center items-center rounded-full text-8xl text-slate-100 relative'>
            <p className='text-2xl absolute top-32 pb-16 h-32'>Recovery:</p>
            <p>{seconds}</p>
        </div>
    )
}

export default Recovery