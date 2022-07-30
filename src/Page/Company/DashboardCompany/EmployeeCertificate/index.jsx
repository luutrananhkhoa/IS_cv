import React, { useState, useEffect, useLayoutEffect, useContext } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { BsChevronDown } from 'react-icons/bs'
import { Web3Context } from '@context/Web3ContextProvider'
import ModalAddLR from './ModalAddLR'
import { DashboardContext } from '../DashboardContextProvider'
import ModalAddSW from './ModalAddSW'

export default function Index() {
  const { contractStudentBusiness, address } = useContext(Web3Context)
  const { passEmployeeAddress, setPassEmployeeAddress } = useContext(DashboardContext)
  const [openModalLR, setOpenModalLR] = useState(false)
  const [openModalSW, setOpenModalSW] = useState(false)
  const [listLR, setListLR] = useState()
  const [listSW, setListSW] = useState()
  const [employeeAddress, setEmployeeAddress] = useState()
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard.index' })
  useLayoutEffect(() => {
    if (contractStudentBusiness && employeeAddress) {
      contractStudentBusiness.methods
        .getListIIGLRResult(address, employeeAddress)
        .call({ from: address })
        .then((success) => {
          // console.log(success)
        })
        .catch((error) => console.log(error))

      contractStudentBusiness.methods
        .getListIIGSWResult(address, employeeAddress)
        .call({ from: address })
        .then((success) => {
          // console.log(success)
        })
        .catch((error) => console.log(error))
    }
  }, [employeeAddress])

  useEffect(() => {
    if (passEmployeeAddress) {
      setEmployeeAddress(passEmployeeAddress)
      setPassEmployeeAddress(undefined)
    }
  }, [passEmployeeAddress])

  // console.log(employeeAddress)

  return (
    <>
      {/* AddLR */}
      <ModalAddLR
        state={[openModalLR, setOpenModalLR]}
        employeeAddress={employeeAddress}
      ></ModalAddLR>

      {/* AddSW */}
      {/* <ModalAddSW
        state={[openModalSW, setOpenModalSW]}
        employeeAddress={employeeAddress}
      ></ModalAddSW> */}
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

        {/* List */}
        <div className={styles.listWrapper}>
          <div className={styles.left}>
            <div className={styles.group}>
              <div className={styles.header}>
                <div className={styles.iconGroup}>
                  <i className={clsx('fa-solid fa-ear-muffs', styles.icon)}></i>
                  <i className={clsx('fa-solid fa-book-open', styles.icon)}></i>
                </div>
                Danh sach chung chi L & R
              </div>
              <div className={styles.scroll}>
                <div className={styles.list}>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                </div>
              </div>

              <div className={styles.footer}>
                <button className={styles.buttonCancel}>Cancel</button>
                <button className={styles.buttonAdd} onClick={() => setOpenModalLR(true)}>
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.group}>
              <div className={styles.header}>
                <div className={styles.iconGroup}>
                  <i className={clsx('fa-solid fa-face-laugh', styles.icon)}></i>
                  <i className={clsx('fa-solid fa-feather', styles.icon)}></i>
                </div>
                Danh sach chung chi L & R
              </div>
              <div className={styles.scroll}>
                <div className={styles.list}>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                  <div className={styles.item}>A</div>
                </div>
              </div>

              <div className={styles.footer}>
                <button className={styles.buttonCancel}>Cancel</button>
                <button className={styles.buttonAdd} onClick={() => setOpenModalSW(true)}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
