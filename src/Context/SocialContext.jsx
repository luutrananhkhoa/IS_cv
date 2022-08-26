import { createContext, useState } from 'react'

export const SocialContext = createContext()

const SocialContextProvider = ({ children }) => {
  const [tab, setTab] = useState(1)
  const [search, setSearch] = useState('')
  const data = { tab, setTab, search, setSearch }

  return <SocialContext.Provider value={data}>{children}</SocialContext.Provider>
}

export default SocialContextProvider
