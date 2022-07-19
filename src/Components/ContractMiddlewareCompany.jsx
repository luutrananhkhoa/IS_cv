import React, { useEffect, useContext, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import aos from 'aos'
import { Web3Context } from '../Context/Web3ContextProvider'
import * as contractConst from '../Api/contractConst'
import Web3 from 'web3'
import { Context } from '../Context/Context'
import detectEthereumProvider from '@metamask/detect-provider'

export default function ContractMiddlewareCompany(props) {
  const { setWeb3, setContractStudentBusiness, setAddress, contractStudentBusiness, address } =
    useContext(Web3Context)
  const { setExistAccount, isLoggedIn } = useContext(Context)
  const navigate = useNavigate()
  //   console.log('location', location)
  const checkProvider = async () => {
    aos.init()
    aos.refresh()

    if (!contractStudentBusiness) {
      const provider = await detectEthereumProvider()
      if (provider) {
        console.log('Ethereum successfully detected!')

        let web3 = new Web3(provider)

        setWeb3(web3)
        web3.eth
          .getAccounts()
          .then(async (success) => {
            //   console.log(success)
            if (success.length > 0) {
              var myContract = new web3.eth.Contract(
                contractConst.abiStudentBusiness,
                contractConst.addressStudentBusiness
              )
              await myContract.methods
                .checkExistBusiness(success[0])
                .call()
                .then((success) => {
                  if (success === '1') setExistAccount(true)
                  else if (success === '2') setExistAccount(false)
                })
                .catch((error) => {
                  console.log(error)
                })
              setAddress(success[0])
              setContractStudentBusiness(myContract)
              if (props.requestLogin) {
                if (isLoggedIn === false) {
                  navigate('/')
                }
              }
            } else {
              if (props.requestAddress) {
                navigate('/')
              }
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        console.log('NOOOOOO')
      }
    }
  }

  //   const check
  useEffect(() => {
    ;(async () => {
      await checkProvider()
    })()
  }, [contractStudentBusiness])
  return (
    <>
      {(() => {
        if (props.requestAddress) {
          if (address) return <Outlet></Outlet>
        } else if (props.requestLogin) {
          if (isLoggedIn) {
            return <Outlet></Outlet>
          }
        } else {
          return <Outlet></Outlet>
        }
      })()}
    </>
  )
}
