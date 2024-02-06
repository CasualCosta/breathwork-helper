import React, { useContext } from 'react'
import { SessionContext } from '../SessionContext'

type Props = {
    type: "roundAmount" | "breathCount" | "breathSpeed"
}

const SetupInput: React.FC<Props> = ({type}) => {
    const description: string = setDescription(type)
    const value: number = getValue(type)
    function setDescription(type: Props["type"]): string {
        switch(type){
            case "roundAmount": return "Amount of rounds"
            case "breathCount": return "Amount of breaths"
            case "breathSpeed": return "Speed"
        }
    }
    function getValue(type: Props["type"]): number {
        switch(type){
            case "roundAmount": return useContext(SessionContext).rounds
            case "breathCount": return useContext(SessionContext).breathCount
            case "breathSpeed": return useContext(SessionContext).breathInterval
        }
    }

    return (
        <div className='flex'>
            <div>{description}</div>
            <input 
                type='number'
                value={value}
            />
        </div>
    )
}

export default SetupInput