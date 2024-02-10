import React, { Dispatch, SetStateAction, useContext } from 'react'
import { SessionContext } from '../SessionContext'

type Props = {
    type: "roundAmount" | "breathCount" | "breathInterval"
}
type Limits = {
    min: number
    max: number
}

const SetupForm: React.FC<Props> = ({type}) => {
    const context = useContext(SessionContext)!
    const description: string = setDescription()
    const value: number = getValue()
    const setter = getAction()
    const limits = getLimits()
    

    function setDescription(): string {
        switch(type){
            case "roundAmount": return "Amount of rounds"
            case "breathCount": return "Amount of breaths"
            case "breathInterval": return "Interval (in ms)"
        }
    }
    function getValue(): number {
        if(!useContext(SessionContext)){
            throw new Error("Context is undefined.")
        }
        switch(type){
            case "roundAmount": return context.maxRounds
            case "breathCount": return context.maxCount
            case "breathInterval": return context.interval
        }
    }
    function getAction(): Dispatch<SetStateAction<number>> {
        if(!useContext(SessionContext)){
            throw new Error("Context is undefined.")
        }
        switch(type){
            case 'roundAmount': return context.setMaxRounds
            case 'breathCount': return context.setMaxCount
            case 'breathInterval': return context.setInterval
        }
    }
    function getLimits(): Limits{
        switch(type){
            case 'roundAmount': return {min: 1, max: 20}
            case 'breathCount': return {min: 1, max: 100}
            case 'breathInterval': return {min: 1, max: 10000}
        }
    }
    
    function handleInput(value: string): void{
        const tryParse = parseInt(value)
        let newValue = isNaN(tryParse) ? 0 : tryParse
        newValue = Math.min(newValue, limits.max)
        newValue = Math.max(newValue, limits.min)
        setter(newValue)
    }

    return (
        <div className='flex'>
            <div>{description}: </div>
            <input 
                type='number'
                value={value}
                onChange={(e) => handleInput(e.target.value)}
            />
        </div>
    )
}

export default SetupForm