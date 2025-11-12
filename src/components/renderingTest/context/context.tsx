import { createContext, useContext, useState, type ReactNode } from 'react'

interface RenderingTestContextType {
  count: number
  setCount: (count: number) => void
  incrementCount: () => void
  decrementCount: () => void
  message: string
  setMessage: (message: string) => void
}

const RenderingTestContext = createContext<RenderingTestContextType | undefined>(undefined)

export const useRenderingTest = () => {
  const context = useContext(RenderingTestContext)

  if (!context) {
    throw new Error('useRenderingTest must be used within RenderingTestProvider')
  }

  return context
}

interface RenderingTestProviderProps {
  children: ReactNode;
}

export const RenderingTestProvider = ({ children }: RenderingTestProviderProps) => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello from Context!')

  const incrementCount = () => setCount(prev => prev + 1)
  const decrementCount = () => setCount(prev => prev - 1)

  const value = {
    count,
    setCount,
    incrementCount,
    decrementCount,
    message,
    setMessage
  }

  return (
    <RenderingTestContext.Provider value={value}>
      {children}
    </RenderingTestContext.Provider>
  )
}