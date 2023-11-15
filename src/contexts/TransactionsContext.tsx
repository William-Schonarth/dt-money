import { ReactNode, createContext, useEffect, useState } from "react";

interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface ITrasactionContext {
  transactions: ITransaction[]
}

interface ITransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITrasactionContext)

export function TrasactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    loadTransactions()
  }, [])

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions")
    const data = await response.json()
    setTransactions(data)
  }

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}