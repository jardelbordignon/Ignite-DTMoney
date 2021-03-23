import { createContext, useEffect, useState, ReactNode } from 'react'
import api from './services/api'

interface ICreateTransactionDTO {
  title: string
  amount: number
  type: string
  category: string
}

interface ITransaction extends ICreateTransactionDTO{
  id: number
  created_at: string
}

interface ITransactionsProvider {
  children: ReactNode
}

interface ITransactionsContextData {
  transactions: ITransaction[]
  createTransaction: (transaction: ICreateTransactionDTO) => Promise<void>
}

export const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
)

export function TransactionsProvider({ children }: ITransactionsProvider) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  
  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(newTransaction: ICreateTransactionDTO) {
    const response = await api.post('/transactions', newTransaction)
    
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction }}>
      { children }
    </TransactionsContext.Provider>
  )
}
