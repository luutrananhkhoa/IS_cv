import React, { useState } from 'react'
import ModalSuccess from '@/Components/ModalSuccess'
import ModalWarning from '@/Components/ModalWarning'
import { useNavigate } from 'react-router-dom'

export default function Test() {
  const navigation = useNavigate()
  const [openModal, setOpenModal] = useState(true)
  const [statusBtn, setStatusBtn] = useState(false)
  return (
    <div>
      {/* {<ModalSuccess open={true} title="applied" setOpen={setOpenModal} />} */}
      {true && (
        <ModalWarning
          state={[openModal, setOpenModal]}
          content="aaa"
          action={()=>navigation('/')}
        />
      )}
    </div>
  )
}
