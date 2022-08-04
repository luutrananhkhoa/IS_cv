import React, { useEffect, useContext, useState } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { Web3Context } from '../Context/Web3ContextProvider'
import * as contractConst from '@constant/contractConst'
import Web3 from 'web3'
import { Context } from '../Context/Context'
import detectEthereumProvider from '@metamask/detect-provider'
import Loading from '@component/Loading'

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
    setIsIIG,
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

              await Promise.allSettled([
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
                  }),

                //check IIG
                await myContract.methods
                  .checkExistIIG(addressTemp)
                  .call()
                  .then((success) => {
                    if (success === '1') {
                      setExistAccount(true)
                      if (getJwtCompany() === addressTemp) {
                        setIsLoggedIn(true)
                        setJwtCompany(addressTemp)
                        setIsIIG(true)
                      } else {
                        removeJwtCompany()
                      }
                    }
                  })
                  .catch((error) => {
                    console.log(error)
                  }),
              ])
                .then((success) => {
                  console.log(success)
                })
                .catch((error) => console.log(error))
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
        let isLoading = <Loading state={true}></Loading>
        let isStayed = <Outlet></Outlet>

        if (props.requestAddress) {
          if (completeCheckMiddleware) {
            if (address) return isStayed
            else return isNavigated
          } else return isLoading
        } else if (props.requestAccount) {
          if (completeCheckMiddleware) {
            if (existAccount) return isStayed
            else return isNavigated
          } else return isLoading
        } else if (props.requestLogin) {
          if (completeCheckMiddleware) {
            if (isLoggedIn) return isStayed
            else return isNavigated
          } else return isLoading
        } else return isStayed
      })()}
    </>
  )
}
