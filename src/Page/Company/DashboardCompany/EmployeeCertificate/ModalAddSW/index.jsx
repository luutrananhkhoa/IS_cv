import React, { useState, useLayoutEffect, useContext, useEffect, useReducer } from 'react'
import Modal from '@component/Modal'
import styles from '../styles.module.scss'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Web3Context } from '@context/Web3ContextProvider'
import ModalWarning from '@component/ModalWarning'
import Loading from '@component/Loading'
import ModalSuccess from '@component/ModalSuccess'
import { useToast } from '@component/Toast'

export default function Index(props) {
  const [open, setOpen] = props.state
  const [toggleResetList, setToggleResetList] = props.toggle
  const { profile } = props
  const { contractStudentBusiness, address } = useContext(Web3Context)

  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard.employeeCertificate' })
  const [loading, setLoading] = useState(false)

  const [testDate, setTestDate] = useState()
  const [testShift, setTestShift] = useState()
  const [expireDate, setExpireDate] = useState()
  const [speakingScore, setSpeakingScore] = useState()
  const [writingScore, setWritingScore] = useState()

  const toast = useToast()

  useEffect(() => {
    setTestDate(undefined)
    setTestShift(undefined)
    setExpireDate(undefined)
    setSpeakingScore(undefined)
    setWritingScore(undefined)
  }, [open])

  const handleAddSW = async () => {
    if (!testDate) {
      toast.warning('testDate', { closeOnClick: true, pauseOnHover: true })
      return
    }
    if (!testShift) {
      toast.warning('testShift', { closeOnClick: true, pauseOnHover: true })
      return
    }
    if (!expireDate) {
      toast.warning('expireDate', { closeOnClick: true, pauseOnHover: true })
      return
    }
    if (!speakingScore) {
      toast.warning('reaspeakingScoreingScore', { closeOnClick: true, pauseOnHover: true })
      return
    }
    if (!writingScore) {
      toast.warning('writingScore', { closeOnClick: true, pauseOnHover: true })
      return
    }
    setLoading(true)
    await contractStudentBusiness.methods
      .addIIGSWResult(
        profile.address,
        new Date(testDate).getTime().toString(),
        testShift,
        new Date(expireDate).getTime().toString(),
        speakingScore,
        writingScore
      )
      .send({
        from: address,
      })
      .then((success) => {
        toast.success('success', { closeOnClick: true, pauseOnHover: true })
        setToggleResetList((e) => !e)
        setOpen(false)
      })
      .catch((error) => {
        console.log(error)
        if (error.code === 4001) toast.warning('unpaid', { closeOnClick: true, pauseOnHover: true })
        else toast.error('error', { closeOnClick: true, pauseOnHover: true })
      })

    setLoading(false)
  }
  useLayoutEffect(() => {
    if (testShift > 4) {
      setTestShift(1)
      return
    }
    if (testShift < 1) {
      setTestShift(4)
      return
    }
  }, [testShift])

  return (
    <>
      <Loading state={loading}></Loading>

      <Modal
        state={[open, setOpen]}
        action={() => {
          handleAddSW()
        }}
        actionText={t('add')}
        title={t('add_a_speaking_writing_certificate')}
      >
        <div className={styles.modalContainer}>
          <div className={styles.content}>
            <div className={clsx(styles.inputWrapper, styles.address)}>
              <label className={styles.label}>{t('employee_address')}</label>
              <input
                type="text"
                name="address"
                id="address"
                className={clsx(styles.input, styles.addressTitle)}
                placeholder={`${t('enter')} ${t('employee_address').toLowerCase()}`}
                onChange={() => {}}
                value={profile.address}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('id')}</label>
              <input
                type="text"
                name="id"
                id="addridess"
                className={clsx(styles.input, styles.addressTitle)}
                placeholder={`${t('enter')} ${t('id').toLowerCase()}`}
                onChange={() => {}}
                value={profile.id}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('test_date')}</label>
              <input
                type="date"
                name="test_date"
                id="test_date"
                value={testDate}
                className={styles.input}
                placeholder={`${t('enter')} ${t('test_date').toLowerCase()}`}
                onChange={(e) => setTestDate(e.target.value)}
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
                onChange={(e) => setTestShift(parseInt(e.target.value.toString()))}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('expire_date')}</label>
              <input
                type="date"
                name="expire_date"
                id="expire_date"
                className={styles.input}
                value={expireDate}
                placeholder={`${t('enter')} ${t('expire_date').toLowerCase()}`}
                onChange={(e) => setExpireDate(e.target.value)}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('speaking_score')}</label>
              <input
                type="number"
                name="speaking_score"
                id="speaking_score"
                className={styles.input}
                value={speakingScore}
                placeholder={`${t('enter')} ${t('speaking_score').toLowerCase()}`}
                onChange={(e) => {
                  setSpeakingScore(parseInt(e.target.value.toString()))
                }}
              ></input>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label}>{t('writing_score')}</label>
              <input
                type="number"
                name="writing_score"
                id="writing_score"
                className={styles.input}
                placeholder={`${t('enter')} ${t('speaking_score').toLowerCase()}`}
                value={writingScore}
                onChange={(e) => {
                  return setWritingScore(parseInt(e.target.value.toString()))
                }}
              ></input>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
