import { useContext, useEffect } from 'react'
import { SessionContext } from '../SessionContext'
import { SessionState } from '../sessionParameters'


const Preparation = () => {
    const context = useContext(SessionContext)!
    const round = context.currentRound
    const setState = context.setState
    useEffect(() => {
        if(context.state !== SessionState.Preparation)
            return
        setTimeout(() => {
            setState(SessionState.Breathe)
        }, 500);
    }, [context.state])
    
    if(context.state !== SessionState.Preparation)
        return <></>
    return (
        <div>Round {round + 1}</div>
    )
}

export default Preparation