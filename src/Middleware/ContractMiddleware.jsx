import React, { useEffect, useContext, useState } from 'react'
import { Outlet, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { Web3Context } from '../Context/Web3ContextProvider'
import * as contractConst from '../Api/contractConst'
import Cookies from 'universal-cookie'
import { Context } from '../Context/Context'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import Header from '@components/Header'

const cookie = new Cookies()

export default function ContractMiddleware(props) {
  const {
    setContractStudentBusiness,
    setAddress,
    contractStudentBusiness,
    address,
    setJwtEmployee,
    getJwtEmployee,
    removeJwtEmployee,
    setWeb3,
  } = useContext(Web3Context)
  const {
    setExistAccount,
    existAccount,
    isLoggedIn,
    setIsLoggedIn,
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
                .checkExistStudent(addressTemp)
                .call()
                .then((success) => {
                  if (success === '1') {
                    setExistAccount(true)
                    if (getJwtEmployee() === addressTemp) {
                      setJwtEmployee(addressTemp)
                      setIsLoggedIn(true)
                    } else {
                      removeJwtEmployee()
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
        let isNavigated = <Navigate to="/" replace />
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
