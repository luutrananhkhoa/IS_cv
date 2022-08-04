import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import ModalWarning from '@component/ModalWarning'
import { useSearchParams, useNavigate, Outlet } from 'react-router-dom'

export default function AddressMiddleware(props) {
  const [pass, setPass] = useState(false)
  const [searchParams] = useSearchParams()
  const addressEmployee = searchParams.get('address')
  const navigation = useNavigate()

  const [addressError, setAddressError] = useState(false)

  const checkAddress = async () => {
    if (!new Web3().utils.isAddress(addressEmployee)) {
      setAddressError(true)
      return
    }
    setPass(true)
  }

  //   const check
  useEffect(() => {
    checkAddress()
  }, [])
  return (
    <>
      <ModalWarning
        state={[addressError, setAddressError]}
        content="Address Error"
        action={() => navigation('/', { replace: true })}
      />
      {pass && <Outlet></Outlet>}
    </>
  )
}
