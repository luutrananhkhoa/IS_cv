import React, { memo, useState, useContext } from 'react'
import styles from './styles.module.scss'
import { Web3Context } from '@context/Web3ContextProvider'
import ModalWarning from '@component/ModalWarning'
import { useNavigate } from 'react-router-dom'
import Loading from '@component/Loading'
import ModalSuccess from '@component/ModalSuccess'

/**
 * to Create ModalWarning
 * @param [openModal, setOpenModalModal]: [openModal: boolean, setOpenModalModal: React.Dispatch<React.SetStateAction<boolean>>]
 * @param title: string
 * @param content: string
 * @param action: function
 * @returns
 */
function Index(props) {
  const [openModal, setOpenModal] = props.state
  const { contractStudentBusiness, address } = useContext(Web3Context)
  const [requestAddressModal, setRequestAddressModal] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { addressIIG } = props

  const [id, setId] = useState('')
  const navigation = useNavigate()
  const handleSubmit = async () => {
    if (!address) {
      setRequestAddressModal(true)
      return
    }
    

    setLoading(true)

    let alreadyRequested = false
    await contractStudentBusiness.methods
      .checkIIGRequest(address, addressIIG)
      .call({ from: address })
      .then((success) => {
        console.log(success)
        if (parseInt(success) === 1) {
          setError(true)
          setErrorMessage('Already request')
          alreadyRequested = true
        }
      })
      .catch((error) => {
        console.log(error)
      })
      
    if (!alreadyRequested) {
      const date = new Date().getTime()
      await contractStudentBusiness.methods
        .sendIIGRequest(address, addressIIG, id, date.toString())
        .send({
          from: address,
        })
        .then((success) => {
          setSuccess(true)
        })
        .catch((error) => {
          console.log(error)
          if (error.code === 4001) {
            setError(true)
            setErrorMessage('Is unpaid')
          } else {
            setError(true)
            setErrorMessage('error')
          }
        })
    }

    setLoading(false)
  }
  return (
    <>
      <Loading state={loading}></Loading>
      <ModalSuccess state={[success, setSuccess]} content="Ssuccess" actionText="Ssuccess" />
      <ModalWarning
        state={[error, setError]}
        content={errorMessage}
        action={() => {
          setError(false)
        }}
      />
      <ModalWarning
        state={[requestAddressModal, setRequestAddressModal]}
        content="Request Login"
        action={() => navigation('/')}
        nonactionText="Cancel"
        actionText="To Login"
        secondaryAction={() => {}}
      ></ModalWarning>
      {openModal && (
        <>
          <div
            className={styles.wrapper}
            // className="w-[100vw] h-[100vh] top-0 fixed bg-slate-700 z-[8] opacity-60"
            onClick={() => {
              setOpenModal((e) => !e)
            }}
          ></div>
          <div className={styles.container}>
            <div className={styles.title}>
              <div className={styles.buttonWrapper}>
                <button
                  onClick={() => {
                    setOpenModal((e) => !e)
                  }}
                  className={styles.buttonClose}
                  // className="text-4xl text-white absolute top-0 right-2 align-center cursor-pointer alert-del"
                >
                  <i className={`fa-solid fa-xmark ${styles.iconClose}`}></i>
                </button>
              </div>
              <p className={styles.titleText}>Xac thuc tin chi</p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.info}>Kiểm tra thông tin cá nhân và thông tin kết quả</div>
              <div className={styles.group}>
                <div className={styles.personalInfo}>Thong tin ca nhan </div>
                <div className={styles.infoRow}>
                  <div className={styles.infoRowCol1}>Address</div>
                  <div className={styles.infoRowCol2}>0x00</div>
                </div>
                <div className={styles.infoRow}>
                  <div className={styles.infoRowCol1}>id</div>
                  <div className={styles.infoRowCol2}>
                    <input
                      type="number"
                      id="id"
                      placeholder="Id"
                      name="id"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className={styles.inputId}
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.end}>
                <button
                  className={styles.cancel}
                  onClick={() => {
                    setOpenModal((e) => !e)
                  }}
                >
                  Cancel
                </button>
                <button
                  className={styles.accept}
                  onClick={() => {
                    handleSubmit()
                    setOpenModal((e) => !e)
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default memo(Index)
