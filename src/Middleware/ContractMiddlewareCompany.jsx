import React, { useEffect, useContext, useState } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { Web3Context } from '../Context/Web3ContextProvider'
import * as contractConst from '../Api/contractConst'
import Web3 from 'web3'
import { Context } from '../Context/Context'
import detectEthereumProvider from '@metamask/detect-provider'
import HeaderCompany from '@components/HeaderCompany'

export default function ContractMiddlewareCompany(props) {
  const {
    setContractStudentBusiness,
    setAddress,
    address,
    setJwtCompany,
    getJwtCompany,
    removeJwtCompany,
    setWeb3,
  } = useContext(Web3Context)
  const {
    setExistAccount,
    isLoggedIn,
    setIsLoggedIn,
    existAccount,
    completeCheckMiddleware,
    setCompleteCheckMiddleware,
  } = useContext(Context)
  const checkProvider = async () => {
    if (!completeCheckMiddleware) {
      const provider = await detectEthereumProvider()
      if (provider) {
        const web3 = new Web3(provider)
        setWeb3(web3)
        const myContract = new web3.eth.Contract(
          contractConst.abiStudentBusiness,
          contractConst.addressStudentBusiness
        )
        setContractStudentBusiness(myContract)
        await web3.eth
          .getAccounts()
          .then(async (success) => {
            const addressTemp = success[0]
            if (addressTemp) {
              setAddress(addressTemp)
              await myContract.methods
                .checkExistBusiness(addressTemp)
                .call()
                .then((success) => {
                  if (success === '1') {
                    setExistAccount(true)
                    if (getJwtCompany() === addressTemp) {
                      setIsLoggedIn(true)
                      setJwtCompany(addressTemp)
                    } else {
                      removeJwtCompany()
                    }
                  }
                })
                .catch((error) => {
                  console.log(error)
                })
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
      setCompleteCheckMiddleware(true)
    }
  }

  //   const check
  useEffect(() => {
    ;(async () => {
      await checkProvider()
    })()
  }, [])
  return (
    <>
      {(() => {
        let isNavigated = <Navigate to="/company" replace />
        if (props.requestAddress && completeCheckMiddleware) {
          if (!address) return isNavigated
        } else if (props.requestAccount && completeCheckMiddleware) {
          if (!existAccount) {
            return isNavigated
          }
        } else if (props.requestLogin && completeCheckMiddleware) {
          if (!isLoggedIn) {
            return isNavigated
          }
        }
        return <Outlet></Outlet>
      })()}
    </>
  )
}
