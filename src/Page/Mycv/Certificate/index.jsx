import React, { useState, useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import { Web3Context } from '@context/Web3ContextProvider'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

export default function Index(props) {
  const { contractStudentBusiness, address } = useContext(Web3Context)
  const { addressEmployee } = props
  const { t } = useTranslation('page', { keyPrefix: 'mycv.cerificate' })
  const [listLR, setListLR] = useState()
  const [listSW, setListSW] = useState()
  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getListIIG()
        .call()
        .then((success) => {
          // console.log(success)
          let listIIG = []
          _.forEach(success[0], (value, index) => {
            listIIG.push({
              address: success[0][index],
              name: success[1][index],
              country: success[2][index],
              facebook: success[3][index],
              website: success[4][index],
              linked: success[5][index],
              password: success[6][index],
            })
          })

          let listIIGLRResult = []
          let listIIGSWResult = []
          _.forEach(listIIG, (value, index) => {
            // console.log(value)
            contractStudentBusiness.methods
              .getListIIGLRResult(value.address, addressEmployee)
              .call()
              .then((s) => {
                _.forEach(s[0], (v, i) => {
                  listIIGLRResult.push({
                    iggAddress: value.address,
                    testDate: new Date(parseInt(s[0][i])),
                    shiftTest: parseInt(s[1][i]),
                    expireDate: new Date(parseInt(s[2][i])),
                    listeningScore: parseInt(s[3][i]),
                    readingScore: parseInt(s[4][i]),
                    totalScore: parseInt(s[5][i]),
                  })
                })
                setListLR(listIIGLRResult)
              })
              .catch((e) => {
                console.log(e)
              })

            //SW
            contractStudentBusiness.methods
              .getListIIGSWResult(value.address, addressEmployee)
              .call()
              .then((s) => {
                _.forEach(s[0], (v, i) => {
                  listIIGLRResult.push({
                    iggAddress: value.address,
                    testDate: new Date(parseInt(s[0][i])),
                    shiftTest: parseInt(s[1][i]),
                    expireDate: new Date(parseInt(s[2][i])),
                    listeningScore: parseInt(s[3][i]),
                    readingScore: parseInt(s[4][i]),
                    totalScore: parseInt(s[5][i]),
                  })
                })
                setListSW(listIIGSWResult)
              })
              .catch((e) => {
                console.log(e)
              })
          })
        })
        .catch((error) => console.error(error))
    }
  }, [contractStudentBusiness])
  return (
    <div className={styles.wrapper}>
      {console.log(listLR)}
      <a className={styles.title}>Chung chi IIG</a>
      <div className={styles.container}>
        <a className={styles.title}>LRRRR</a>
        <div className={styles.content}>
          <div className={styles.inputWrapper}>
            <label className={styles.label}>ngay test</label>
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label}>diem nghe</label>
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label}>tong diem</label>
          </div>
        </div>
        {listLR?.map((value, index) => {
          return (
            <div key={index} className={styles.content}>
              <div className={styles.inputWrapper}>
                <a className={clsx(styles.input, styles.addressTitle)}>
                  {value.testDate.toDateString()}
                </a>
              </div>
              <div className={styles.inputWrapper}>
                <a className={clsx(styles.input, styles.addressTitle)}>{value.listeningScore}</a>
              </div>
              <div className={styles.inputWrapper}>
                <a className={clsx(styles.input, styles.addressTitle)}>{value.readingScore}</a>
              </div>
            </div>
          )
        })}
      </div>
      {/* <div className={styles.container}>
        <a className={styles.title}>LRRRR</a>
        {listSW?.map((value, index) => {
          return (
            <div key={index} className={styles.content}>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>ngay test</label>
                <a className={clsx(styles.input, styles.addressTitle)}>
                  {value.testDate.toDateString()}
                </a>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>diem nghe</label>
                <a className={clsx(styles.input, styles.addressTitle)}>{value.speakingScore}</a>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label}>tong diem</label>
                <a className={clsx(styles.input, styles.addressTitle)}>{value.writingScore}</a>
              </div>
            </div>
          )
        })}
      </div> */}
    </div>
  )
}
