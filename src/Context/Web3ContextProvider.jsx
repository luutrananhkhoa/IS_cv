import { createContext, useState, useCallback, useReducer } from 'react'
import { useCookies } from 'react-cookie'
import update from 'immutability-helper'
import Cookies from 'universal-cookie'

export const Web3Context = createContext()

const cookies = new Cookies()
const time = new Date(new Date().getTime() + 86400000 * 7)

const Web3ContextProvider = ({ children }) => {
  const [complete, setComplete] = useState(false)

  const [showMorePanel, setShowMorePanel] = useState({ show: false, panel: 1 })

  const [loginState, setLoginState] = useState({
    isLoggedIn: false,
    for: cookies.get('for'),
    address: undefined,
    id: undefined,
    contractEmployee: undefined,
    contractBusiness: undefined,
    jwt: cookies.get('jwt'),
  })
  const dispatchLogin = (action) => {
    switch (action.type) {
      case 'set_address': {
        setLoginState(update(loginState, { $merge: { address: action.address } }))
        return
      }
      case 'auto_login': {
        cookies.set('jwt', action.address, {
          expires: time,
          secure: true,
          sameSite: true,
        })
        cookies.set('for', action.for, {
          expires: time,
          secure: true,
          sameSite: true,
        })

        setLoginState(
          update(loginState, {
            $merge: {
              isLoggedIn: true,
              for: cookies.get('for'),
              id: action.id,
              address: action.address,
              contractEmployee: action.contractEmployee,
              jwt: action.address,
            },
          })
        )
        return
      }

      case 'employee_login': {

        if (action.remember) {
          cookies.set('jwt', loginState.address, {
            expires: time,
            secure: true,
            sameSite: true,
          })
          cookies.set('for', 'employee', {
            expires: time,
            secure: true,
            sameSite: true,
          })
        } else {
          cookies.remove('jwt')
          cookies.remove('for')
        }

        setLoginState(
          update(loginState, {
            $merge: {
              isLoggedIn: true,
              for: 'employee',
              id: action?.id,
              contractEmployee: action?.contractEmployee,
              jwt: loginState?.address,
            },
          })
        )
        return
      }
      case 'employee_logout': {
        cookies.remove('jwt')
        cookies.remove('for')
        setLoginState(
          update(loginState, {
            $merge: {
              isLoggedIn: false,
              for: undefined,
              id: undefined,
              address: undefined,
              contractEmployee: undefined,
              contractBusiness: undefined,
              jwt: undefined,
            },
          })
        )
        return
      }
      case 'business_logout': {
        cookies.remove('jwt')
        cookies.remove('for')
        setLoginState(
          update(loginState, {
            $merge: {
              isLoggedIn: false,
              for: undefined,
              id: undefined,
              address: undefined,
              contractEmployee: undefined,
              contractBusiness: undefined,
              jwt: undefined,
            },
          })
        )
        return
      }
      case 'business_login':
        {
          if (action.remember) {
            cookies.set('jwt', action.address, {
              expires: time,
              secure: true,
              sameSite: true,
            })
            cookies.set('for', 'business', {
              expires: time,
              secure: true,
              sameSite: true,
            })
          } else {
            cookies.remove('jwt')
            cookies.remove('for')
          }

          setLoginState(
            update(loginState, {
              $merge: {
                isLoggedIn: true,
                for: 'business',
                id: action?.address,
                contractBusiness: action?.contractBusiness,
                jwt: action?.address,
              },
            })
          )
        }
        return
    }
  }

  return (
    <Web3Context.Provider
      value={{
        loginState: loginState,
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
