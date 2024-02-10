import React, {useContext} from 'react'
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
        <div>
            <p>Good job!</p>
            {holds.map((hold, i) => {
                return <div className='flex justify-evenly' key={i}>
                    <p>Round {i + 1}:</p>
                    <p>
                        {Math.floor(hold / 60)}:{(hold % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}
                    </p>
                </div>
            })}
            <button onClick={() => setState(SessionState.Setup)}>Back to the start</button>
        </div>
    )
}


export default Results