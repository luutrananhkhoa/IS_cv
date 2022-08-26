import { createContext, useState } from 'react'

const HeaderContextProvider = ({ children }) => {
  const [listSelected, setListSelected] = useState()

  return (
    <HeaderContext.Provider value={{ listSelected, setListSelected }}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContextProvider
