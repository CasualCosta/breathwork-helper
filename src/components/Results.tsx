import {useContext} from 'react'
import { SessionContext } from '../SessionContext'
import { SessionState } from '../sessionParameters'


const Results = () => {
    const context = useContext(SessionContext)!
    const state = context.state
    const setState = context.setState
    const holds = context.holds

    if(state !== SessionState.Results)
        return <></>
    return (
        <div className='bg-teal-900 z-2 w-96 h-96 mt-36 h-4/12 flex flex-col justify-center gap-4 items-center text-slate-100 rounded-xl'>
            <p className='text-6xl'>Good job!</p>
            {holds.map((hold, i) => {
                return <div className='flex justify-evenly gap-4 bg-slate-100/25 px-2 py-1 rounded text-2xl' key={i}>
                    <p>Round {i + 1}:</p>
                    <p>
                        {Math.floor(hold / 60)}:{(hold % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}
                    </p>
                </div>
            })}
            <button 
                className='py-1 px-2 rounded text-xl bg-emerald-700/50 hover:scale-110 hover:bg-emerald-700/75 duration-300'
                onClick={() => setState(SessionState.Setup)}
            >Back to the start</button>
        </div>
    )
}


export default Results