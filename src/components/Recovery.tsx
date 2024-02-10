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
        
        if(seconds < 15){
            setTimeout(() => setSeconds(seconds + 1), 100);
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
        <div>Recovery: {seconds}</div>
    )
}

export default Recovery