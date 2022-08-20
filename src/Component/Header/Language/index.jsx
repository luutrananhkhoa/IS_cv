import React, { useState } from 'react'
import { Tooltip } from '@component/Tooltip'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import vi from '../../../Asset/image/flag/vi.png'
import en from '../../../Asset/image/flag/en.png'
import { LANGUAGES } from '@constant/languageConst'
import * as flag from '../../../Asset/image/flag'
import _ from 'lodash'

const list = [LANGUAGES[0], LANGUAGES[1]]

export default function Index() {
  const { t, i18n } = useTranslation()
  return (
    <Tooltip
      content={
        <ul className={styles.ulLanguage}>
          {list.map((value, index) => {
            return (
              <button
                className={styles.languageButton}
                onClick={() => i18n.changeLanguage(value.value)}
              >
                <img src={flag[value.value]}></img>
                <div className={styles.buttonSelect}>{value.name}</div>
              </button>
            )
          })}
        </ul>
      }
    >
      {(() => {
        let item = _.find(list, (e) => {
          if (e.value === i18n.language) return true
        })
        return (
          <div className={styles.languageButton}>
            <img src={flag[i18n.language]}></img>
            <div className={styles.buttonSelect}>{item.name}</div>
          </div>
        )
      })()}
    </Tooltip>
  )
}
