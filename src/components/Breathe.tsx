import { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../SessionContext'
import { SessionState } from '../sessionParameters'
import '../Animation.css'

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
    }, [count, state])
    
    
    if(state !== SessionState.Breathe)
        return <></>
    return (
        <div className='z-2 w-96 h-96 my-36 bg-orange-700 h-4/12 flex justify-center items-center rounded-full relative'>
            <span className="ping relative rounded-full h-full w-full bg-orange-500 duration-1000 ease-out"></span>
            <p className='z-3  text-8xl text-slate-300 absolute'>
                {count + 1}
            </p>
        </div>
    )
}

export default Breathe