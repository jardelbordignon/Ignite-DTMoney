import { createContext, useEffect, useState, ReactNode } from 'react'
import api from './services/api'

interface ITransition {
  id: number
  title: string
  amount: number
  type: string
  category: string
  created_at: string
}

interface ITransitionsProvider {
  children: ReactNode
}

export const TransactionsContext = createContext<ITransition[]>([])

export function TransactionsProvider({ children }: ITransitionsProvider) {
  const [transactions, setTransactions] = useState<ITransition[]>([])
  
  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      { children }
    </TransactionsContext.Provider>
  )
}
