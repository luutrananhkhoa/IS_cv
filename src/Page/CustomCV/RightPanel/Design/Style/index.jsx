import React, { useContext } from 'react'
import styles from './styles.module.scss'
import { CustomCVContext } from '../../../CustomCVContext'
import clsx from 'clsx'
function Index() {
  const { list, setList, selected, linkColor, setLinkColor } = useContext(CustomCVContext)
  return (
    <>
      {selected && (
        <div className={styles.container}>
          <div className={styles.title}>Style</div>
          <div className={styles.wrapper}>
            <div className={styles.row}>
              <div className={clsx(styles.item)}>
                <div className={styles.colorText}>Background</div>
                <div
                  style={{
                    background: list[selected].background.hex,
                  }}
                  className={styles.colorBox}
                ></div>
                <i
                  onClick={() => {
                    if (selected == linkColor.id && linkColor.for == 'background') {
                      setLinkColor({})
                    } else {
                      setLinkColor({ id: selected, for: 'background' })
                    }
                  }}
                  className={clsx('fa-thin fa-link-horizontal', {
                    [styles.active]: selected == linkColor.id && linkColor.for == 'background',
                  })}
                ></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Index
