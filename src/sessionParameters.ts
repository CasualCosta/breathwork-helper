import { Dispatch, SetStateAction } from "react"

export enum sessionState {
    Setup = 0,
    Preparation = 1,
    Breathe = 2,
    Hold = 3,
    recovery = 4,
    results = 5
}
export type SessionParameters = {
    rounds: number,
    setRounds: Dispatch<SetStateAction<number>>,
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    interval: number,
    setInterval: Dispatch<SetStateAction<number>>,
    holds: number[]
    setHolds: Dispatch<SetStateAction<number[]>>,
    state: sessionState
    setState: Dispatch<SetStateAction<sessionState>>
} | null