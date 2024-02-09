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
            }, interval * 1000);
            return
        }
        setState(SessionState.Hold)
    })
    
    
    if(state !== SessionState.Breathe)
        return <></>
    return (
        <div>{count + 1}</div>
    )
}

export default Breathe