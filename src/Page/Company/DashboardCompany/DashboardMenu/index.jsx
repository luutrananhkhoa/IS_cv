import React, { useContext } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { DashboardContext } from '../DashboardContextProvider'
import { menu } from '../menu'

export default function Index() {
  const { menuSelected, setMenuSelected, closeMenu, setCloseMenu } = useContext(DashboardContext)
  const { t } = useTranslation('page', { keyPrefix: 'company.dashboard.menu' })
  return (
    <div className={clsx(styles.container, { [styles.close]: !closeMenu })}>
      <ul>
        {menu.map((value, index) => {
          return (
            <li
              key={index}
              className={clsx(styles.menuItem, { [styles.active]: value.key === menuSelected.key })}
              onClick={() => setMenuSelected(value.key)}
            >
              <p className={styles.text}>{t(value.name)}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
