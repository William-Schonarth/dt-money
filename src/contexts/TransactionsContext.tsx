import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface ICreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface ITrasactionContext {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (e: ICreateTransactionInput) => Promise<void>
}

interface ITransactionsProviderProps {
  children: ReactNode
}


export const TransactionsContext = createContext({} as ITrasactionContext)

export function TrasactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc'
      }
    })
    setTransactions(response.data)
  }

  async function createTransaction({ category, description, price, type }: ICreateTransactionInput) {
    const response = await api.post('transactions', { category, description, price, type, createdAt: new Date() })
    setTransactions(state => [response.data, ...state])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}