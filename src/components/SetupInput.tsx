import React, { Dispatch, SetStateAction, useContext } from 'react'
import { SessionContext } from '../SessionContext'

type Props = {
    type: "roundAmount" | "breathCount" | "breathInterval"
}

const SetupInput: React.FC<Props> = ({type}) => {
    const description: string = setDescription()
    const value: number = getValue()
    const setter = getAction()

    function setDescription(): string {
        switch(type){
            case "roundAmount": return "Amount of rounds"
            case "breathCount": return "Amount of breaths"
            case "breathInterval": return "Interval"
        }
    }
    function getValue(): number {
        if(!useContext(SessionContext)){
            throw new Error("Context is undefined.")
        }
        switch(type){
            case "roundAmount": return useContext(SessionContext)!.rounds
            case "breathCount": return useContext(SessionContext)!.count
            case "breathInterval": return useContext(SessionContext)!.interval
        }
    }
    function getAction(): Dispatch<SetStateAction<number>> {
        if(!useContext(SessionContext)){
            throw new Error("Context is undefined.")
        }
        const context = useContext(SessionContext)!
        switch(type){
            case 'roundAmount': return context.setRounds
            case 'breathCount': return context.setCount
            case 'breathInterval': return context.setInterval
        }
    }

    return (
        <div className='flex'>
            <div>{description}: </div>
            <input 
                type='number'
                value={value}
                onChange={(e) => setter(parseInt(e.target.value))}
            />
        </div>
    )
}

export default SetupInput