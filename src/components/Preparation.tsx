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
        }, 5000);
    }, [context.state])
    
    if(context.state !== SessionState.Preparation)
        return <></>
    return (
        <div className='bg-teal-600 z-2 w-96 h-96 mt-36 h-4/12 flex flex-col justify-center items-center rounded-full text-6xl text-slate-100'>
            Round {round + 1}
        </div>
    )
}

export default Preparation