import React, { createContext, useState, useContext } from 'react'

// Context
const CountContext = createContext()

// Provider
export default function CountProvider({ children }) {
  // Here it's possible to set many states to use in the app
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  )
}

// Hook, possible to create many different hooks
export function useCount() {
  const { count, setCount } = useContext(CountContext)
  return { count, setCount }
}