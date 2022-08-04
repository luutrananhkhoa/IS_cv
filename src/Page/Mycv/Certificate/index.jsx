import React, { useState, useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import { Web3Context } from '@context/Web3ContextProvider'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import _ from 'lodash'
import Progressbar from '@component/Progressbar'

export default function Index(props) {
  const { contractStudentBusiness, address } = useContext(Web3Context)
  const { addressEmployee } = props
  const { t } = useTranslation('page', { keyPrefix: 'mycv.cerificate' })
  const [listLR, setListLR] = useState()
  const [listSW, setListSW] = useState()
  const [listIIG, setListIIG] = useState()
  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getListIIG()
        .call()
        .then((success) => {
          let listIIG = []
          _.forEach(success[0], (value, index) => {
            if (success[0][index] !== '') {
              listIIG.push({
                address: success[0][index],
                name: success[1][index],
                country: success[2][index],
                facebook: success[3][index],
                website: success[4][index],
                linked: success[5][index],
                password: success[6][index],
              })
            }
          })
          setListIIG(true)
          let max = 0
          _.forEach(listIIG, (value, index) => {
            contractStudentBusiness.methods
              .getListIIGLRResult(value.address, addressEmployee)
              .call()
              .then((s) => {
                let maxItem = _.maxBy(s[5], function (o) {
                  return parseInt(o)
                })
                maxItem = parseInt(maxItem)
                if (maxItem > max) {
                  max = maxItem

                  _.forEach(s[0], (v, i) => {
                    if (parseInt(s[5][i]) === max) {
                      setListLR({
                        iggAddress: value.address,
                        iigName: value.name,
                        testDate: new Date(parseInt(s[0][i])),
                        shiftTest: parseInt(s[1][i]),
                        expireDate: new Date(parseInt(s[2][i])),
                        listeningScore: parseInt(s[3][i]),
                        readingScore: parseInt(s[4][i]),
                        totalScore: parseInt(s[5][i]),
                      })
                      return
                    }
                  })
                }
              })
              .catch((e) => {
                console.log(e)
              })

            //SW
          })
          max = 0
          _.forEach(listIIG, (value, index) => {
            contractStudentBusiness.methods
              .getListIIGSWResult(value.address, addressEmployee)
              .call()
              .then((s) => {
                let maxItem = _.maxBy(s[5], function (o) {
                  return parseInt(o)
                })
                maxItem = parseInt(maxItem)
                if (maxItem > max) {
                  max = maxItem

                  _.forEach(s[0], (v, i) => {
                    if (parseInt(s[5][i]) === max) {
                      setListSW({
                        iggAddress: value.address,
                        testDate: new Date(parseInt(s[0][i])),
                        shiftTest: parseInt(s[1][i]),
                        expireDate: new Date(parseInt(s[2][i])),
                        speakingScore: parseInt(s[3][i]),
                        writingScore: parseInt(s[4][i]),
                        totalScore: parseInt(s[5][i]),
                      })
                      return
                    }
                  })
                }
              })
              .catch((e) => {
                console.log(e)
              })

            //SW
          })
        })
        .catch((error) => console.error(error))
    }
  }, [contractStudentBusiness])
  return (
    <>
      {listIIG && (
        <div className={styles.container}>
          <div className={styles.title}>{listLR?.iigName}</div>
          {/* LR */}
          <div className={styles.wrapper}>
            <div className={styles.date}>{listLR?.testDate?.toLocaleDateString()}</div>
            {/* LR */}
            <div>
              <div className={styles.bar}>
                <div className={styles.line}>
                  <div className={styles.lineWrapper}>
                    <div className={styles.line1}>
                      <a className={styles.name}>Listening</a>
                      <div className={styles.scoreCircleWrapper}>
                        <span
                          className={styles.gap}
                          style={{
                            '--percent':
                              Math.round((parseInt(listLR?.readingScore) / 495) * 100) + '%',
                          }}
                        ></span>
                        <div className={styles.circleImage}>
                          <a>{listLR?.readingScore}</a>
                        </div>
                      </div>
                      <div className={styles.progressBar}>
                        <span
                          style={{
                            '--percent':
                              Math.round((parseInt(listLR?.readingScore) / 495) * 100) + '%',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className={styles.line1Text}>495</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.line1}>
                      <a className={styles.name}>Reading</a>
                      <div className={styles.scoreCircleWrapper}>
                        <span
                          className={styles.gap}
                          style={{
                            '--percent':
                              Math.round((parseInt(listLR?.listeningScore) / 495) * 100) + '%',
                          }}
                        ></span>
                        <div className={styles.circleImage}>
                          <a>{listLR?.listeningScore}</a>
                        </div>
                      </div>
                      <div className={styles.progressBar}>
                        <span
                          style={{
                            width: Math.round((parseInt(listLR?.listeningScore) / 495) * 100) + '%',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className={styles.line1Text}>495</div>
                  </div>
                </div>

                <div className={styles.circle}>
                  <div className={styles.circleTitleWrapper}>
                    <a>TOTAL SCORE</a>
                  </div>
                  <div className={styles.circleImage}>
                    <a>{listLR?.totalScore}</a>
                  </div>
                </div>
              </div>

              {/* SW */}
              <li className={styles.bar}>
                <div className={styles.line}>
                  <div className={styles.lineWrapper}>
                    <div className={styles.line1}>
                      <a className={styles.name}>Speaking</a>
                      <div className={styles.scoreCircleWrapper}>
                        <span
                          className={styles.gap}
                          style={{
                            '--percent':
                              Math.round((parseInt(listSW?.speakingScore) / 200) * 100) + '%',
                          }}
                        ></span>
                        <div className={styles.circleImage}>
                          <a>{listLR?.readingScore}</a>
                        </div>
                      </div>
                      <div className={styles.progressBar}>
                        <span
                          style={{
                            '--percent':
                              Math.round((parseInt(listSW?.speakingScore) / 200) * 100) + '%',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className={styles.line1Text}>200</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.line1}>
                      <a className={styles.name}>Writing</a>
                      <div className={styles.scoreCircleWrapper}>
                        <span
                          className={styles.gap}
                          style={{
                            '--percent':
                              Math.round((parseInt(listSW?.writingScore) / 200) * 100) + '%',
                          }}
                        ></span>
                        <div className={styles.circleImage}>
                          <a>{listLR?.readingScore}</a>
                        </div>
                      </div>
                      <div className={styles.progressBar}>
                        <span
                          style={{
                            '--percent':
                              Math.round((parseInt(listSW?.writingScore) / 200) * 100) + '%',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className={styles.line1Text}>200</div>
                  </div>
                </div>

                <div className={styles.circle}>
                  <div className={styles.circleTitleWrapper}>
                    <a>TOTAL SCORE</a>
                  </div>
                  <div className={styles.circleImage}>
                    <a>{listSW?.totalScore}</a>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
