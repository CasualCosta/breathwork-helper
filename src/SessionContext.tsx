import { SessionParameters } from './sessionParameters'
import { createContext } from 'react'

export const SessionContext = createContext<SessionParameters>(null)