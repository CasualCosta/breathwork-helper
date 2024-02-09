import React, {useContext, useEffect, useState} from 'react'
import { SessionContext } from '../SessionContext'
import { SessionState } from '../sessionParameters'

const Hold = () => {
    const context = useContext(SessionContext)!
    const setState = context.setState
    const setHolds = context.setHolds
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        if(context.state !== SessionState.Hold)
            return
        setTimeout(() => {
                setSeconds(seconds + 1)
        }, 1000);
    })
    function endHold(){
        const newHolds = context.holds.map((hold, i) => {
            return context.currentRound !== i ?
                hold :
                seconds
        })
        setHolds(newHolds)
        setState(SessionState.Recovery)
    }
    
    if(context.state !== SessionState.Hold)
        return <></>
    return (
        <div>
            <p>{seconds / 60}:{(seconds % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</p>
        </div>
    )
}

export default Hold