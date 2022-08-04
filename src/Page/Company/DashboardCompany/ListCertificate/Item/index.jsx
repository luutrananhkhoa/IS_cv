import clsx from 'clsx'
import React, { useState, useContext } from 'react'
import styles from '../styles.module.scss'
import { useTranslation } from 'react-i18next'
import { menu } from '../../menu'
import _ from 'lodash'
import { DashboardContext } from '../../DashboardContextProvider'

export default function Index(props) {
  const { value, index } = props
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard.index' })
  const [openModal, setOpenModal] = useState(false)
  const { setMenuSelected, setPassEmployeeAddress } = useContext(DashboardContext)
  const hanldeClick = () => {
    setPassEmployeeAddress(value.address)
    setMenuSelected('employee_certificate')
  }
  return (
    <>
      <tr className={styles.body}>
        <th className={styles.column1}>{index}</th>
        <th className={styles.column2}>{value.address}</th>
        <th className={styles.column3}>{value.id}</th>
        <th className={styles.column4}>{new Date(parseInt(value.requestDate)).toLocaleString()}</th>
        <th className={clsx(styles.column5, styles.statusWrapper)}>
          <div>
            {value.status === 'Waiting' && (
              <button className={clsx(styles.buttonStatus, styles.buttonWaiting)}>
                {t('waiting')}
              </button>
            )}
            {value.status === 'Accepted' && (
              <button className={clsx(styles.buttonStatus, styles.buttonAccepted)}>
                {t('success')}
              </button>
            )}
            {value.status === 'Declined' && (
              <button className={clsx(styles.buttonStatus, styles.buttonDeclined)}>
                {t('declined')}
              </button>
            )}
            <button className={styles.buttonSW} onClick={hanldeClick}>
              <i className={clsx('fa-regular fa-pen-to-square', styles.iconS)}></i>
            </button>
          </div>
        </th>
      </tr>
    </>
  )
}
