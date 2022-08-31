import React, { useEffect, useContext, useState } from 'react'
import { Outlet, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { Web3Context } from '../Context/Web3ContextProvider'
import * as employeeController from '@contract/employeeController'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import { useToast } from '@component/Toast'
import { useLoading } from '@component/Loading'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default function ContractMiddleware(props) {
  const { loginState, dispatchLogin, complete, setComplete } = useContext(Web3Context)

  const toast = useToast()
  const loading = useLoading()
  const handleCheck = async () => {
    loading.open()
    const provider = await detectEthereumProvider()
    if (provider) {
      const web3 = new Web3(provider)

      await web3.eth
        .getAccounts()
        .then(async (success) => {
          const address = success[0]
          dispatchLogin({
            type: 'set_address',
            address: address,
          })
          if (!address) return
          if (!cookies.get('for')) return
          if (!cookies.get('jwt')) return
          if (address != cookies.get('jwt')) return
          if (!web3.utils.isAddress(cookies.get('jwt'))) return
          let myContract
          if (cookies.get('for') == 'employee')
            myContract = new web3.eth.Contract(employeeController.ABI, employeeController.ADDRESS)
          else if (cookies.get('for') == 'business')
            myContract = new web3.eth.Contract(businessController.ABI, businessController.ADDRESS)
          await myContract.methods
            .autoLogin(address)
            .call({ from: address })
            .then((success) => {
              const id = parseInt(success)
              if (id > 0) {
                dispatchLogin({
                  type: 'auto_login',
                  for: cookies.get('for'),
                  address: address,
                  id: id,
                  contractEmployee: myContract,
                  jwt: address,
                })
              }
            })
            .catch((error) => {
              console.log(error)
            })
        })
        .catch((error) => {
          console.log(error)
        })
    }
    loading.close()

    setComplete(true)
  }

  useEffect(() => {
    ;(async () => {
      if (complete) return
      await handleCheck()
    })()
  }, [complete])
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
