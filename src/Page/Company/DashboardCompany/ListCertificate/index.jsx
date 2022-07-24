import React, { useState } from 'react'
import styles from './styles.module.scss'
import { BsChevronDown } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import Modal from '../Modal'

export default function Index() {
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard' })
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Modal state={[openModal, setOpenModal]}></Modal>
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

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.body}>
                <th className={`${styles.theaderStyle} ${styles.column1}`} onClick={()=>setOpenModal(true)}>{t('number')}</th>
                <th className={`${styles.theaderStyle} ${styles.column2}`}>{t('full_name')}</th>
                <th className={`${styles.theaderStyle} ${styles.column3}`}>{t('exam_date')}</th>
                <th className={`${styles.theaderStyle} ${styles.column4}`}>{t('exam_location')}</th>
                <th className={`${styles.theaderStyle} ${styles.column5}`}>{t('score')}</th>
                <th className={`${styles.theaderStyle} ${styles.column6}`}>{t('status')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.body}>
                <th className={styles.column1}>Class name</th>
                <th className={styles.column2}>Type</th>
                <th className={styles.column3}>Hours</th>
                <th className={styles.column4}>Trainer</th>
                <th className={styles.column5}>Spots</th>
                <th className={styles.column6}>Spots</th>
              </tr>
              <tr className={styles.body}>
                <th className={styles.column1}>Class name</th>
                <th className={styles.column2}>Type</th>
                <th className={styles.column3}>Hours</th>
                <th className={styles.column4}>Trainer</th>
                <th className={styles.column5}>Spots</th>
                <th className={styles.column6}>Spots</th>
              </tr>
              <tr className={styles.body}>
                <th className={styles.column1}>Class name</th>
                <th className={styles.column2}>Type</th>
                <th className={styles.column3}>Hours</th>
                <th className={styles.column4}>Trainer</th>
                <th className={styles.column5}>Spots</th>
                <th className={styles.column6}>Spots</th>
              </tr>
              <tr className={styles.body}>
                <th className={styles.column1}>Class name</th>
                <th className={styles.column2}>Type</th>
                <th className={styles.column3}>Hours</th>
                <th className={styles.column4}>Trainer</th>
                <th className={styles.column5}>Spots</th>
                <th className={styles.column6}>Spots</th>
              </tr>
              <tr className={styles.body}>
                <th className={styles.column1}>Class name</th>
                <th className={styles.column2}>Type</th>
                <th className={styles.column3}>Hours</th>
                <th className={styles.column4}>Trainer</th>
                <th className={styles.column5}>Spots</th>
                <th className={styles.column6}>Spots</th>
              </tr>
              <tr className={styles.body}>
                <th className={styles.column1}>Class name</th>
                <th className={styles.column2}>Type</th>
                <th className={styles.column3}>Hours</th>
                <th className={styles.column4}>Trainer</th>
                <th className={styles.column5}>Spots</th>
                <th className={styles.column6}>Spots</th>
              </tr>
              <tr className={styles.body}>
                <th className={styles.column1}>Class name</th>
                <th className={styles.column2}>Type</th>
                <th className={styles.column3}>Hours</th>
                <th className={styles.column4}>Trainer</th>
                <th className={styles.column5}>Spots</th>
                <th className={styles.column6}>Spots</th>
              </tr>
              <tr className={styles.body}>
                <th className={styles.column1}>Class name</th>
                <th className={styles.column2}>Type</th>
                <th className={styles.column3}>Hours</th>
                <th className={styles.column4}>Trainer</th>
                <th className={styles.column5}>Spots</th>
                <th className={styles.column6}>Spots</th>
              </tr>
              <tr className={styles.body}>
                <th className={styles.column1}>Class name</th>
                <th className={styles.column2}>Type</th>
                <th className={styles.column3}>Hours</th>
                <th className={styles.column4}>Trainer</th>
                <th className={styles.column5}>Spots</th>
                <th className={styles.column6}>Spots</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
