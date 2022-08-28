import { createContext, useState, useCallback, useReducer } from 'react'
import { useCookies } from 'react-cookie'

export const Web3Context = createContext()

const Web3ContextProvider = ({ children }) => {
  const [showMorePanel, setShowMorePanel] = useState({ show: false, panel: 1 })
  const [employeeCookies, setEmployeeCookies, removeEmployeeCookies] = useCookies(['employeeJwt'])
  const [companyCookies, setCompanyCookies, removeCompanyCookies] = useCookies(['companyJwt'])
  const initialLogin = {
    isLoggedIn: false,
    for: 'employee',
    address: undefined,
    id: 0,
    contractEmployee: undefined,
    jwt: employeeCookies.employeeJwt,
  }

  const reducerLogin = (state, action) => {
    switch (action.type) {
      case 'employee_auto_login': {
        setEmployeeCookies('employeeJwt', action.jwt, {
          expires: new Date(new Date().getTime() + 86400000 * 7),
          secure: true,
          sameSite: true,
        })
        return {
          ...state,
          isLoggedIn: action.isLoggedIn || state.isLoggedIn,
          for: 'employee' || state.for,
          address: action.address || state.address,
          id: action.id || state.id,
          contractEmployee: action.contractEmployee || state.contractEmployee,
          jwt: action.jwt || state.jwt,
        }
      }
      case 'employeee_login': {
        action.remember
          ? setEmployeeCookies('employeeJwt', action.jwt, {
              expires: new Date(new Date().getTime() + 86400000 * 7),
              secure: true,
              sameSite: true,
            })
          : removeEmployeeCookies('employeeJwt')

        return {
          ...state,
          isLoggedIn: action.isLoggedIn || state.isLoggedIn,
          for: 'employee' || state.for,
          address: action.address || state.address,
          id: action.address || state.id,
          contractEmployee: action.contractEmployee || state.contractEmployee,
          jwt: action.jwt || state.jwt,
        }
      }
      case 'employee_logout': {
        removeEmployeeCookies('employeeJwt')
        return {
          ...state,
          login: false,
        }
      }
      default:
        return state
    }
  }
  const [loginState, dispatchLogin] = useReducer(reducerLogin, initialLogin)

  return (
    <Web3Context.Provider
      value={{
        loginState,
        dispatchLogin,
        showMorePanel,
        setShowMorePanel,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}
export default Web3ContextProvider
