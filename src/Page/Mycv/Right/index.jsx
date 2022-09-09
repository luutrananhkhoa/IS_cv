import React, { useContext } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Link, useSearchParams } from 'react-router-dom'
import { routes } from '../config'
function Index() {
  const [searchParams] = useSearchParams()
  const tab = searchParams.get('tab')
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        {(() => {
          let active = routes[tab] ? tab : 'default'
          return Object.keys(routes).map((key) => {
            return (
              <Link
                to={`?tab=${routes[key].to}`}
                className={clsx(styles.button, { [styles.active]: key == active })}
              >
                {routes[key].name}
              </Link>
            )
          })
        })()}
      </div>
    </div>
  )
}

export default Index
