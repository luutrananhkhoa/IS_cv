import { createContext, useState, useCallback } from 'react'
import { useCookies } from 'react-cookie'

export const Web3Context = createContext()

const Web3ContextProvider = ({ children }) => {
  const [web3, setWeb3] = useState()
  const [contractStudentBusiness, setContractStudentBusiness] = useState()
  const [address, setAddress] = useState()

  const [employeeCookies, setEmployeeCookies, removeEmployeeCookies] = useCookies(['employeeJwt'])
  const [companyCookies, setCompanyCookies, removeCompanyCookies] = useCookies(['companyJwt'])
  const setJwtEmployee = useCallback((token) => {
    setEmployeeCookies('employeeJwt', token, {
      expires: new Date(new Date().getTime() + 86400000 * 3),
      // httpOnly: false,
      secure: true,
      sameSite: true,
    })
  }, [])
  const setJwtCompany = useCallback((token) => {
    setCompanyCookies('companyJwt', token, {
      expires: new Date(new Date().getTime() + 86400000 * 3),
      // httpOnly: false,
      secure: true,
      sameSite: true,
    })
  }, [])
  const removeJwtEmployee = useCallback(() => {
    removeEmployeeCookies('employeeJwt')
  }, [])

  const removeJwtCompany = useCallback(() => {
    removeCompanyCookies('companyJwt')
  }, [])
  return (
    <Web3Context.Provider
      value={{
        web3,
        setWeb3,
        contractStudentBusiness,
        setContractStudentBusiness,
        address,
        setAddress,
        setJwtEmployee,
        setJwtCompany,
        removeJwtEmployee,
        removeJwtCompany,
        employeeCookies,
        companyCookies,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}
export default Web3ContextProvider
