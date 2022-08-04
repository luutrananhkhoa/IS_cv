import React, { useState, useEffect } from 'react'
import ModalSuccess from '@/Component/ModalSuccess'
import ModalWarning from '@component/ModalWarning'
import ModalEvaluate from '@/Component/ModalEvaluate'
import Loading from '@component/Loading'
// import { useNavigate } from 'react-router-dom'
import useA from './useA'
import { eventEmitter, test } from './UserDetailComponent'
import { useToast } from '@component/Toast'

export default function Test() {
  // const navigation = useNavigate()
  const contextData = useA()
  const [openModal, setOpenModal] = useState(true)
  const [statusBtn, setStatusBtn] = useState(false)
  const toast = useToast()
  useEffect(() => {
    setTimeout(function () {
      eventEmitter.emit('clicked', 111)
    }, 2200)
  }, [])
  const btnSuccess = () => {
    toast.success('success', {
      time: 30000,
      closeOnClick: true,
      pauseOnHover: true,
    })
  }
  const btnWarning = () => {
    toast.warning('warning', {
      time: 30000,
      closeOnClick: true,
      pauseOnHover: true,
    })
  }
  const btnInfo = () => {
    toast.info('info', {
      time: 30000,
      closeOnClick: true,
      pauseOnHover: true,
    })
  }
  const btnError = () => {
    toast.error('error', {
      time: 30000,
      closeOnClick: true,
      pauseOnHover: true,
    })
  }
  const btnClear = () => {
    toast.clear()
  }
  return (
    <div>
      <button onClick={btnSuccess}>succes</button>
      <button onClick={btnWarning}>warning</button>
      <button onClick={btnInfo}>succes</button>
      <button onClick={btnError}>succes</button>
      <button onClick={btnClear}>clear</button>

      {/* {<ModalSuccess open={true} title="applied" setOpen={setOpenModal} />} */}
      {/* {true && (
        <ModalWarning
          state={[openModal, setOpenModal]}
          content="aaa"
          action={()=>navigation('/')}
        />
      )} */}
      {/* <Loading state={true}></Loading> */}
      {/* <ModalEvaluate open={true}></ModalEvaluate> */}
    </div>
  )
}
