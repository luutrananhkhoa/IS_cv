import { createContext, useState, useCallback } from 'react'
import { useCookies } from 'react-cookie'

export const Web3Context = createContext()

const Web3ContextProvider = ({ children }) => {
  const [contractStudentBusiness, setContractStudentBusiness] = useState()
  const [address, setAddress] = useState()
  const [web3, setWeb3] = useState()

  const [employeeCookies, setEmployeeCookies, removeEmployeeCookies] = useCookies(['employeeJwt'])
  const [companyCookies, setCompanyCookies, removeCompanyCookies] = useCookies(['companyJwt'])
  const setJwtEmployee = useCallback((token) => {
    setEmployeeCookies('employeeJwt', token, {
      expires: new Date(new Date().getTime() + 86400000 * 7),
      // httpOnly: false,
      secure: true,
      sameSite: true,
    })
  }, [])
  const setJwtCompany = useCallback((token) => {
    setCompanyCookies('companyJwt', token, {
      expires: new Date(new Date().getTime() + 86400000 * 7),
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

  const getJwtEmployee = useCallback(() => {
    return employeeCookies.employeeJwt
  })
  const getJwtCompany = useCallback(() => {
    return companyCookies.companyJwt
  })
  return (
    <Web3Context.Provider
      value={{
        contractStudentBusiness,
        setContractStudentBusiness,
        address,
        web3,
        setWeb3,
        setAddress,
        setJwtEmployee,
        setJwtCompany,
        removeJwtEmployee,
        removeJwtCompany,
        getJwtEmployee,
        getJwtCompany,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}
export default Web3ContextProvider
