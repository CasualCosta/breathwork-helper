import { Dispatch, SetStateAction } from "react"

export enum SessionState {
    Setup = 0,
    Preparation = 1,
    Breathe = 2,
    Hold = 3,
    Recovery = 4,
    Results = 5
}
export type SessionParameters = {
    maxRounds: number,
    setMaxRounds: Dispatch<SetStateAction<number>>,
    currentRound: number,
    setCurrentRound: Dispatch<SetStateAction<number>>,
    maxCount: number,
    setMaxCount: Dispatch<SetStateAction<number>>,
    interval: number,
    setInterval: Dispatch<SetStateAction<number>>,
    holds: number[]
    setHolds: Dispatch<SetStateAction<number[]>>,
    state: SessionState
    setState: Dispatch<SetStateAction<SessionState>>
} | null