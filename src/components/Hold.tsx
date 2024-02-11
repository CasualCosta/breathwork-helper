import {useContext, useEffect, useState} from 'react'
import { SessionContext } from '../SessionContext'
import { SessionState } from '../sessionParameters'

const Hold = () => {
    const context = useContext(SessionContext)!
    const state = context.state
    const setState = context.setState
    const setHolds = context.setHolds
    const [seconds, setSeconds] = useState(0)
    let timer: ReturnType<typeof setTimeout>

    useEffect(() => {
        if(context.state !== SessionState.Hold)
            return
        timer = setTimeout(() => setSeconds(seconds + 1), 100);
    }, [state, seconds])

    function endHold(){
        const newHolds = context.holds.map((hold, i) => {
            return context.currentRound !== i ?
                hold :
                seconds
        })
        clearTimeout(timer)
        setSeconds(0)
        setHolds(newHolds)
        setState(SessionState.Recovery)
    }
    
    if(context.state !== SessionState.Hold)
        return <></>
    return (
        <div>
            <p>{Math.floor(seconds / 60)}:{(seconds % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</p>
        <button
            onClick={() => endHold()}
        >
            End
        </button>
        </div>
    )
}

export default Hold