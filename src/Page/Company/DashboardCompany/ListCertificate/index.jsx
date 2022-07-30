import React, { useState, useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import { BsChevronDown } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { Web3Context } from '@context/Web3ContextProvider'
import _ from 'lodash'
import Item from './Item'

export default function Index() {
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard.index' })
  const [list, setList] = useState()

  const { contractStudentBusiness, address } = useContext(Web3Context)
  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getListIIGRequest(address)
        .call({ from: address })
        .then((success) => {
          console.log(success)
          let arr = []
          if (success[0]) {
            _.forEach(success[0], (value, index) => {
              if (success[0][index] !== '') {
                arr.push({
                  requestCode: success[0][index],
                  address: success[1][index],
                  id: success[3][index],
                  requestDate: success[4][index],
                  status: success[5][index],
                })
              }
            })
          }

          setList(arr)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])
  return (
    <>
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
                <th className={`${styles.theaderStyle} ${styles.column1}`}>{t('number')}</th>
                <th className={`${styles.theaderStyle} ${styles.column2}`}>{t('address')}</th>
                <th className={`${styles.theaderStyle} ${styles.column3}`}>{t('id')}</th>
                <th className={`${styles.theaderStyle} ${styles.column4}`}>{t('request_date')}</th>
                <th className={`${styles.theaderStyle} ${styles.column5}`}>{t('status')}</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((value, index) => {
                return <Item key={index} value={value} index={index}></Item>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
