import React, { useState, useEffect, useLayoutEffect, useContext } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { BsChevronDown } from 'react-icons/bs'
import { Web3Context } from '@context/Web3ContextProvider'
import ModalAddLR from './ModalAddLR'
import { DashboardContext } from '../DashboardContextProvider'
import ModalAddSW from './ModalAddSW'
import _ from 'lodash'
import ItemLR from './ItemLR'
import ItemSW from './ItemSW'
import Modal from '@component/Modal'
import ModalSuccess from '@component/ModalSuccess'
import ModalWarning from '@component/ModalWarning'
import Loading from '@component/Loading'

export default function Index() {
  const { contractStudentBusiness, address } = useContext(Web3Context)
  const { passEmployeeAddress, setPassEmployeeAddress } = useContext(DashboardContext)
  const [openModalLR, setOpenModalLR] = useState(false)
  const [openModalSW, setOpenModalSW] = useState(false)

  const [loading, setLoading] = useState(false)

  const [request, setRequest] = useState()
  const [modalConfirmSuccess, setModalConfirmSuccess] = useState(false)
  const [modalConfirmError, setModalConfirmError] = useState(false)

  const [toggleResetListLR, setToggleResetListLR] = useState(false)
  const [toggleResetListSW, setToggleResetListSW] = useState(false)
  const [listLR, setListLR] = useState()
  const [listSW, setListSW] = useState()
  const [employeeAddress, setEmployeeAddress] = useState()

  const [modalConfirm, setModalConfirm] = useState(false)
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard.index' })
  useEffect(() => {
    if (contractStudentBusiness && employeeAddress) {
      contractStudentBusiness.methods
        .getListIIGLRResult(address, employeeAddress)
        .call({ from: address })
        .then((success) => {
          let temp = []
          _.forEach(success[0], (value, index) => {
            temp.push({
              testDate: new Date(parseInt(success[0][index])),
              shiftTest: parseInt(success[1][index]),
              expireDate: new Date(parseInt(success[2][index])),
              listeningScore: parseInt(success[3][index]),
              readingScore: parseInt(success[4][index]),
              totalScore: parseInt(success[5][index]),
            })
          })
          setListLR(temp)
        })
        .catch((error) => console.log(error))

      let requestTemp
      contractStudentBusiness.methods
        .getListIIGRequestStudent(address, employeeAddress)
        .call({ from: address })
        .then((success) => {
          _.forEach(success[0], (value, index) => {
            console.log(success)
            if (success[5][index] === 'Waiting') {
              requestTemp = {
                code: success[0][index],
                address: success[1][index],
                id: success[3][index],
                requestDate: success[2][index],
              }
              console.log(requestTemp)
            }
          })
          setRequest(requestTemp)
        })
        .catch((error) => console.log(error))
    }
  }, [employeeAddress, toggleResetListLR])

  useEffect(() => {
    if (contractStudentBusiness && employeeAddress) {
      contractStudentBusiness.methods
        .getListIIGSWResult(address, employeeAddress)
        .call({ from: address })
        .then((success) => {
          let temp = []
          _.forEach(success[0], (value, index) => {
            temp.push({
              testDate: new Date(parseInt(success[0][index])),
              shiftTest: parseInt(success[1][index]),
              expireDate: new Date(parseInt(success[2][index])),
              speakingScore: parseInt(success[3][index]),
              writingScore: parseInt(success[4][index]),
              totalScore: parseInt(success[5][index]),
            })
          })
          setListSW(temp)
        })
        .catch((error) => console.log(error))
    }
  }, [employeeAddress, toggleResetListSW])

  useEffect(() => {
    if (passEmployeeAddress) {
      setEmployeeAddress(passEmployeeAddress)
      setPassEmployeeAddress(undefined)
    }
  }, [passEmployeeAddress])

  return (
    <>
      <Loading state={loading}></Loading>
      {/* AddLR */}
      {request && (
        <ModalAddLR
          state={[openModalLR, setOpenModalLR]}
          toggle={[toggleResetListLR, setToggleResetListLR]}
          profile={request}
        ></ModalAddLR>
      )}

      {request && (
        <ModalAddSW
          state={[openModalSW, setOpenModalSW]}
          toggle={[toggleResetListSW, setToggleResetListSW]}
          profile={request}
        ></ModalAddSW>
      )}

      <ModalSuccess state={[modalConfirmSuccess, setModalConfirmSuccess]}></ModalSuccess>
      <ModalWarning state={[modalConfirmError, setModalConfirmError]}></ModalWarning>
      <Modal
        state={[modalConfirm, setModalConfirm]}
        nonaction={async () => {
          setLoading(true)
          await contractStudentBusiness.methods
            .confirmIIGRequest(employeeAddress, address, request.code, 'Declined')
            .send({ from: address })
            .then((success) => {
              console.log(success)
              setModalConfirmSuccess(true)
            })
            .catch((error) => {
              console.log(error)
              setModalConfirmError(true)
            })
          setLoading(false)
        }}
        action={async () => {
          setLoading(true)
          await contractStudentBusiness.methods
            .confirmIIGRequest(employeeAddress, address, request.code, 'Accepted')
            .send({ from: address })
            .then((success) => {
              console.log(success)
              setModalConfirmSuccess(true)
            })
            .catch((error) => {
              console.log(error)
              setModalConfirmError(true)
            })
          setLoading(false)
        }}
      >
        Confirm
      </Modal>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{t('certificate_verification')} </div>
        </div>
        <div className={styles.filterWrapper}>
          <p>{t('filter')}: </p>
          <div className={styles.inputWrapper}>
            <input type="date" id="date" name="date" className={styles.filterDate} />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="location"
              name="location"
              placeholder={t('exam_location_input')}
              className={styles.filterLocation}
            ></input>
            <div className={styles.filterDropdown}>
              <BsChevronDown size="20px"></BsChevronDown>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="status"
              name="status"
              placeholder={t('status_input')}
              className={styles.filterStatus}
            />
            <div className={styles.filterDropdown}>
              <BsChevronDown size="20px"></BsChevronDown>
            </div>
          </div>
        </div>

        <div className={styles.statusWrapper}>
          <div className={styles.status}>
            {request && (
              <button
                className={clsx(styles.buttonStatus, styles.buttonWaiting)}
                onClick={() => {
                  setModalConfirm(true)
                }}
              >
                waiting
              </button>
            )}
          </div>
        </div>

        <div className={styles.group}>
          <div className={styles.groupTitleWrapper}>
            <div className={styles.textTitle}>
              <a className={styles.iconWrapper}>
                <i className={clsx('fa-solid fa-ear-muffs', styles.icon)}></i>
                <i className={clsx('fa-solid fa-book-open', styles.icon)}></i>
              </a>
              Danh sach LR
            </div>

            {request && (
              <button
                className={styles.buttonAdd}
                onClick={() => {
                  setOpenModalLR(true)
                }}
              >
                ADD
              </button>
            )}
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr className={styles.body}>
                  <th className={`${styles.theaderStyle} ${styles.column1}`}>{t('number')}</th>
                  <th className={`${styles.theaderStyle} ${styles.column2}`}>ngay test</th>
                  <th className={`${styles.theaderStyle} ${styles.column3}`}>ca</th>
                  <th className={`${styles.theaderStyle} ${styles.column4}`}>het han</th>
                  <th className={`${styles.theaderStyle} ${styles.column5}`}>nghe</th>
                  <th className={`${styles.theaderStyle} ${styles.column5}`}>doc</th>
                  <th className={`${styles.theaderStyle} ${styles.column5}`}>tong</th>
                </tr>
              </thead>
              <tbody>
                {listLR?.map((value, index) => {
                  return <ItemLR key={index} value={value} index={index}></ItemLR>
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.group}>
          <div className={styles.groupTitleWrapper}>
            <div className={styles.textTitle}>
              <a className={styles.iconWrapper}>
                <i className={clsx('fa-solid fa-face-laugh', styles.icon)}></i>
                <i className={clsx('fa-solid fa-feather', styles.icon)}></i>
              </a>
              Danh sach SW
            </div>

            {request && (
              <button
                className={styles.buttonAdd}
                onClick={() => {
                  setOpenModalSW(true)
                }}
              >
                ADD
              </button>
            )}
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr className={styles.body}>
                  <th className={`${styles.theaderStyle} ${styles.column1}`}>{t('number')}</th>
                  <th className={`${styles.theaderStyle} ${styles.column2}`}>ngay test</th>
                  <th className={`${styles.theaderStyle} ${styles.column3}`}>ca</th>
                  <th className={`${styles.theaderStyle} ${styles.column4}`}>het han</th>
                  <th className={`${styles.theaderStyle} ${styles.column5}`}>noi</th>
                  <th className={`${styles.theaderStyle} ${styles.column5}`}>viet</th>
                  <th className={`${styles.theaderStyle} ${styles.column5}`}>tong</th>
                </tr>
              </thead>
              <tbody>
                {listSW?.map((value, index) => {
                  return <ItemSW key={index} value={value} index={index}></ItemSW>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
