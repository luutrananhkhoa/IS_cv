import React, { memo, useState, useContext } from 'react'
import styles from './styles.module.scss'
import { Web3Context } from '@context/Web3ContextProvider'
import { useNavigate } from 'react-router-dom'
import Loading from '@component/Loading'
import { useToast } from '@component/Toast'
import Modal from '@component/Modal'

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
  const [loading, setLoading] = useState(false)

  const { addressIIG } = props

  const toast = useToast()

  const [id, setId] = useState('')
  const navigation = useNavigate()
  const handleSubmit = async () => {
    if (!address) {
      toast.error('request login', { closeOnClick: true, pauseOnHover: true })
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
          toast.warning('Already request', { closeOnClick: true, pauseOnHover: true })
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
          toast.success('success', { pauseOnHover: true, closeOnClick: true })
        })
        .catch((error) => {
          console.log(error)
          if (error.code === 4001) {
            toast.warning('Is unpaid', { pauseOnHover: true, closeOnClick: true })
          } else {
            toast.warning('error', { pauseOnHover: true, closeOnClick: true })
          }
        })
    }

    setLoading(false)
  }
  return (
    <>
      <Loading state={loading}></Loading>
      <Modal
        state={[openModal, setOpenModal]}
        nonaction={() => {}}
        nonactionText="cancel"
        action={handleSubmit}
        actionText="submit"
        title="Xac thuc tin chi"
      >
        <div className={styles.container}>
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
          </div>
        </div>
      </Modal>
    </>
  )
}

export default memo(Index)
