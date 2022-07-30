import React, { useState, useLayoutEffect, useContext } from 'react'
import Modal from '@component/Modal'
import styles from '../styles.module.scss'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Web3Context } from '@context/Web3ContextProvider'
import ModalWarning from '@component/ModalWarning'

export default function Index(props) {
  const [openModalLR, setOpenModalLR] = props.state
  const { employeeAddress } = props
  const { contractStudentBusiness, address } = useContext(Web3Context)
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard.employeeCertificate' })
  const [testDate, setTestDate] = useState()
  const [testShift, setTestShift] = useState()
  const [expireDate, setExpireDate] = useState()
  const [listeningScore, setListeningScore] = useState()
  const [readingScore, setReadingScore] = useState()

  const [modalWarningContent, setModalWarningContent] = useState()
  const [openModalWarning, setOpenModalWarning] = useState(false)

  const handleAddLR = () => {
    contractStudentBusiness.methods
      .addIIGLRResult(
        employeeAddress,
        testDate.getTime().toString(),
        testShift,
        expireDate.getTime().toString(),
        listeningScore,
        readingScore
      )
      .send({
        from: address,
        // gas: 20000000,
      })
      .then((success) => {
        console.log(success)
      })
      .catch((error) => {
        console.log(error)
      })
    // console.log({
    //   employeeAddress,
    //   testDate: testDate.getTime().toString(),
    //   testShift,
    //   expireDate: expireDate.getTime(),
    //   listeningScore,
    //   readingScore,
    // })
  }
  useLayoutEffect(() => {
    if (testShift === 5) {
      setTestShift(1)
      return
    }
    if (testShift === 0) {
      setTestShift(4)
      return
    }
  }, [testShift])

  return (
    <>
      <ModalWarning state={[openModalWarning, setOpenModalWarning]}>
        {modalWarningContent}
      </ModalWarning>
      <Modal
        state={[openModalLR, setOpenModalLR]}
        action={() => {
          handleAddLR()
        }}
        actionText={t('add')}
        title={t('add_a_listening_reading_certificate')}
      >
        <div className={styles.modalContainer}>
          <div className={styles.content}>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('employee_address')}</label>
              <input
                type="text"
                name="address"
                id="address"
                className={clsx(styles.input, styles.addressTitle)}
                placeholder={`${t('enter')} ${t('employee_address').toLowerCase()}`}
                onChange={() => {}}
                value={employeeAddress}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('test_date')}</label>
              <input
                type="date"
                name="test_date"
                id="test_date"
                value={testDate && testDate.toISOString().split('T')[0]}
                className={styles.input}
                placeholder={`${t('enter')} ${t('test_date').toLowerCase()}`}
                onChange={(e) => setTestDate(new Date(e.target.value))}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('test_shift')}</label>
              <input
                type="number"
                name="test_shift"
                id="test_shift"
                className={styles.input}
                value={testShift}
                placeholder={`${t('enter')} ${t('test_shift').toLowerCase()}`}
                // value={national}
                onChange={(e) => setTestShift(parseInt(e.target.value))}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('expire_date')}</label>
              <input
                type="date"
                name="expire_date"
                id="expire_date"
                className={styles.input}
                value={expireDate && expireDate.toISOString().split('T')[0]}
                placeholder={`${t('enter')} ${t('expire_date').toLowerCase()}`}
                onChange={(e) => setExpireDate(new Date(e.target.value))}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('listening_score')}</label>
              <input
                type="number"
                name="listening_score"
                id="listening_score"
                className={styles.input}
                value={listeningScore}
                placeholder={`${t('enter')} ${t('listening_score').toLowerCase()}`}
                onChange={(e) => setListeningScore(parseInt(e.target.value))}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('reading_score')}</label>
              <input
                type="number"
                name="reading_score"
                id="reading_score"
                className={styles.input}
                placeholder={`${t('enter')} ${t('listening_score').toLowerCase()}`}
                value={readingScore}
                onChange={(e) => setReadingScore(parseInt(e.target.value))}
              ></input>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
