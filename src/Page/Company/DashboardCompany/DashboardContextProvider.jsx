import { createContext, useState, useReducer } from 'react'
import { menu } from './menu'
import _ from 'lodash'

const initialMenu = {
  key: menu[0].key,
  name: menu[0].name,
  element: menu[0].element,
}

const reducer = (state, action) => {
  let newState = _.find(menu, (value, index) => {
    if (value.key === action.key) return value
  })
  if (newState) {
    return {
      key: newState.key,
      name: newState.name,
      element: newState.element,
    }
  } else return state
}

export const DashboardContext = createContext()

const DashboardContextProvider = ({ children }) => {
  const [closeMenu, setCloseMenu] = useState(false)
  const [menuSelected, dispatch] = useReducer(reducer, initialMenu)
  const setMenuSelected = (key) => {
    dispatch({ key })
  }
  const [passEmployeeAddress, setPassEmployeeAddress] = useState()
  const data = {
    closeMenu,
    setCloseMenu,
    menuSelected,
    setMenuSelected,
    passEmployeeAddress,
    setPassEmployeeAddress,
  }

  return <DashboardContext.Provider value={data}>{children}</DashboardContext.Provider>
}

export default DashboardContextProvider
