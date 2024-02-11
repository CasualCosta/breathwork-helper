import React, { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../SessionContext'
import { SessionState } from '../sessionParameters'

const Breathe = () => {
    const context = useContext(SessionContext)!
    const state = context.state
    const setState = context.setState
    const interval = context.interval
    const [count, setCount] = useState<number>(0)
    
    useEffect(() => {
        if(state != SessionState.Breathe)
            return
        if(count < context.maxCount){
            setTimeout(() => {
                setCount(count + 1)
            }, interval);
            return
        }
        setCount(0)
        setState(SessionState.Hold)
    })
    
    
    if(state !== SessionState.Breathe)
        return <></>
    return (
        <div className='z-2 w-24 bg-orange-700 h-4/12'>
            <div className='z-3'>
                {count + 1}
            </div>
        </div>
    )
}

export default Breathe