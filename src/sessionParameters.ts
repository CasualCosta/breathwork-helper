import { Dispatch, SetStateAction } from "react"

export type SessionParameters = {
    rounds: number,
    setRounds: Dispatch<SetStateAction<number>>,
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    interval: number,
    setInterval: Dispatch<SetStateAction<number>>,
    holds: number[]
    setHolds: Dispatch<SetStateAction<number[]>>,
} | null