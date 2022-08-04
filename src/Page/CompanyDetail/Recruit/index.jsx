import React, { useState, useEffect } from 'react'
import ModalSuccess from '@/Component/ModalSuccess'
import Loading from '@/Component/Loading'
import ModalWarning from '@/Component/ModalWarning'
import Web3 from 'web3'

export default function Index(props) {
  const { title, content, contractStudentBusiness, address, addressBusiness } = props
  const [openLoading, setOpenLoading] = useState(false)
  const [isAppliedBefore, setIsAppliedBefore] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [requestPayment, setRequestPayment] = useState(false)
  const [addressError, setAddressError] = useState()
  const handleApply = async () => {
    setOpenLoading(true)
    if (!new Web3().utils.isAddress(address)) {
      setAddressError(true)
      return
    }
    await contractStudentBusiness.methods
      .checkExistBusiness(address)
      .call()
      .then((success) => {
        if (success !== '1') {
          setAddressError(true)
          return
        }
      })
      .catch((error) => {
        console.log(error)
      })
    await contractStudentBusiness.methods
      .checkCV(address, addressBusiness, title)
      .call()
      .then(async (result) => {
        if (parseInt(result) == 0) {
          await contractStudentBusiness.methods
            .sendCV(address, addressBusiness, title, content)
            .send({
              from: address,
              
            })
            .then((success) => {
              setIsSuccess(true)
            })
            .catch((error) => {
              if (error.code === 4001) {
                setRequestPayment(true)
              }
              console.log(error)
            })
        } else {
          setIsAppliedBefore(true)
        }
      })
      .catch((error) => console.log(error))
    setOpenLoading(false)
  }
  return (
    <>
      <ModalWarning
        state={[addressError, setAddressError]}
        content="Address Error"
        // action={() => navigation('/')}
      />
      <ModalWarning
        state={[isAppliedBefore, setIsAppliedBefore]}
        content="Is applied before"
        // action={() => navigation('/')}
      />
      <ModalWarning
        state={[requestPayment, setRequestPayment]}
        content="Is applied before"
        // action={() => navigation('/')}
      />
      <ModalSuccess
        state={[isSuccess, setIsSuccess]}
        content="Is applied before"
        // action={() => navigation('/')}
      />
      <Loading state={openLoading}></Loading>
      <div className="w-full h-[10rem] mt-6 p-6 bg-[#E7E7E7] rounded-md">
        <p className="font-[500] text-2xl">{content}</p>
        <div className="flex justify-between">
          <div className="flex justify-between mt-8">{title}</div>
          <button
            className=" w-[6rem] h-[2.5rem] mt-8  text-[1rem] text-white font-semibd text-center bg-orange-btn rounded-[2rem]"
            onClick={() => handleApply(content, title)}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  )
}
