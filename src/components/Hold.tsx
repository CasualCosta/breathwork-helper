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
        timer = setTimeout(() => setSeconds(seconds + 1), 1000);
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
        <div className='flex flex-col text-slate-100 items-center'>
            <div className='bg-teal-900 z-2 w-96 h-96 mt-36 h-4/12 flex justify-center items-center rounded-full text-8xl'>
                <p className=''>{Math.floor(seconds / 60)}:{(seconds % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</p>
            </div>
            <button
                className='rounded m-8 bg-cyan-900 w-32 h-16 text-4xl transition ease-in-out hover:scale-110 hover:bg-cyan-700 duration-300'
                onClick={() => endHold()}
            >
                End
            </button>
        </div>
    )
}

export default Hold