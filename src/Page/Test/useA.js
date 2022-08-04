import React from 'react'
import { userDetailContext } from './UserDetailComponent'

export default function useA() {
  var contextData = React.useContext(userDetailContext)
  return contextData
}
