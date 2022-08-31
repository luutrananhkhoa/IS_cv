import { createContext, useState, useCallback, useReducer } from 'react'
import { useCookies } from 'react-cookie'

export const Web3Context = createContext()

const Web3ContextProvider = ({ children }) => {
  const [complete, setComplete] = useState(false)
  const [showMorePanel, setShowMorePanel] = useState({ show: false, panel: 1 })
  const [employeeCookies, setEmployeeCookies, removeEmployeeCookies] = useCookies(['employeeJwt'])
  const [forCookies, setForCookies, removeForCookies] = useCookies(['for'])
  const [businessCookies, setBusinessCookies, removeBusinessCookies] = useCookies(['businessJwt'])
  const initialLogin = {
    isLoggedIn: false,
    for: forCookies.for,
    address: undefined,
    id: undefined,
    contractEmployee: undefined,
    contractBusiness: undefined,
    jwt:
      forCookies.for == 'employee'
        ? employeeCookies.employeeJwt
        : forCookies.for == 'business' && undefined,
  }

  const reducerLogin = (state, action) => {
    switch (action.type) {
      case 'set_address': {
        return { ...state, address: action.address }
      }
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
      case 'employee_login': {
        action.remember
          ? setEmployeeCookies('employeeJwt', action.address, {
              expires: new Date(new Date().getTime() + 86400000 * 7),
              secure: true,
              sameSite: true,
            })
          : removeEmployeeCookies('employeeJwt')

        return {
          ...state,
          isLoggedIn: true,
          for: 'employee',
          id: action?.address,
          contractEmployee: action?.contractEmployee,
          jwt: action?.address,
        }
      }
      case 'employee_logout': {
        removeEmployeeCookies('employeeJwt')
        return {
          ...state,
          isLoggedIn: false,
          for: undefined,
          id: undefined,
          address: undefined,
          contractEmployee: undefined,
          contractBusiness: undefined,
          jwt: undefined,
        }
      }
      case 'business_logout': {
        removeBusinessCookies('businessJwt')
        return {
          ...state,
          isLoggedIn: false,
          for: undefined,
          id: undefined,
          address: undefined,
          contractEmployee: undefined,
          contractBusiness: undefined,
          jwt: undefined,
        }
      }
      case 'business_login': {
        action.remember
          ? setBusinessCookies('businessJwt', action.address, {
              expires: new Date(new Date().getTime() + 86400000 * 7),
              secure: true,
              sameSite: true,
            })
          : removeBusinessCookies('businessJwt')

        return {
          ...state,
          isLoggedIn: true,
          for: 'business',
          id: action?.address,
          contractBusiness: action?.contractBusiness,
          jwt: action?.address,
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
        complete,
        setComplete,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}
export default Web3ContextProvider
