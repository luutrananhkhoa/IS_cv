import { createContext, useState } from 'react'

export const Web3Context = createContext()

const Web3ContextProvider = ({ children }) => {
  const [web3, setWeb3] = useState()
  const [contractStudentBusiness, setContractStudentBusiness] = useState()
  return (
    <Web3Context.Provider
      value={{ web3, setWeb3, contractStudentBusiness, setContractStudentBusiness }}
    >
      {children}
    </Web3Context.Provider>
  )
}
export default Web3ContextProvider
