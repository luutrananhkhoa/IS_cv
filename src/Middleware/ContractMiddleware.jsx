import React, { useEffect, useContext, useState } from 'react'
import { Outlet, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { Web3Context } from '../Context/Web3ContextProvider'
import * as employeeController from '@contract/employeeController'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import { useToast } from '@component/Toast'
import { useLoading } from '@component/Loading'

export default function ContractMiddleware(props) {
  const { loginState, dispatchLogin } = useContext(Web3Context)
  const [complete, setComplete] = useState(false)
  const toast = useToast()
  const loading = useLoading()
  const handleCheck = async () => {
    if (!complete) {
      loading.open();
      const provider = await detectEthereumProvider()
      if (provider) {
        const web3 = new Web3(provider)

        const myContract = new web3.eth.Contract(employeeController.ABI, employeeController.ADDRESS)
        await web3.eth
          .getAccounts()
          .then(async (success) => {
            const addressTemp = success[0]
            if (addressTemp) {
              let jwt
              if (web3.utils.isAddress(loginState.jwt)) jwt = loginState.jwt
              else jwt = '0x0000000000000000000000000000000000000000'
              await myContract.methods
                .autoLogin(jwt)
                .call({ from: addressTemp })
                .then((success) => {
                  const id = parseInt(success)
                  if (id > 0) {
                    dispatchLogin({
                      type: 'employee_auto_login',
                      isLoggedIn: true,
                      for: 'employee',
                      address: addressTemp,
                      id: id,
                      contractEmployee: myContract,
                      jwt: addressTemp,
                    })
                  } else {
                    dispatchLogin({
                      type: 'employee_auto_login',
                      isLoggedIn: false,
                      for: 'employee',
                      address: addressTemp,
                      id: 0,
                      contractEmployee: myContract,
                      jwt: '',
                    })
                  }
                })
                .catch((error) => {
                  console.log(error)
                  dispatchLogin({
                    type: 'employee_auto_login',
                    isLoggedIn: false,
                    for: 'employee',
                    address: addressTemp,
                    id: 0,
                    contractEmployee: myContract,
                    jwt: '',
                  })
                })
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
      loading.close();
    }
    setComplete(true)
  }

  useEffect(() => {
    ;(async () => {
      await handleCheck()
    })()
  }, [])
  return (
    <>
      {console.log(loginState)}
      {(() => {
        let isNavigated = <Navigate key={0} to="/" replace />
        let isStayed = <Outlet key={2}></Outlet>
        if (!complete) return
        if (props.requestAddress) {
          if (loginState.address) return isStayed
          else return isNavigated
        } else if (props.requestAccount) {
          if (connectMetamask) return isStayed
          else return isNavigated
        } else if (props.requestLogin) {
          if (loginState.isLoggedIn) return isStayed
          else return isNavigated
        } else return isStayed
      })()}
    </>
  )
}
