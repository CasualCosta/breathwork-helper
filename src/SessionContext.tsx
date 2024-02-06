import { SessionParameters } from './sessionParameters'
import { createContext } from 'react'

export const SessionContext = createContext<SessionParameters>({
  rounds: 3,
  breathCount: 30,
  breathInterval: 0.5,
  holdDuration: Array(3).fill(0)
})