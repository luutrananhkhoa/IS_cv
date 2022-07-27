import { createContext, useState } from 'react'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [completeCheckMiddleware, setCompleteCheckMiddleware] = useState(false)

  const [isIIG, setIsIIG] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [existAccount, setExistAccount] = useState(false)
  const data = {
    existAccount,
    setExistAccount,
    isLoggedIn,
    setIsLoggedIn,
    completeCheckMiddleware,
    setCompleteCheckMiddleware,
  }

  return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider
