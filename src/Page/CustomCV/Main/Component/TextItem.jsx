import { memo, useState } from 'react'
import { defaultComponent } from '../../config'
import styles from '../styles.module.scss'

function TextItem(props) {
  const { item } = props
  return (
    <div
      className={styles.componentText}
      style={{
        fontFamily: (item.fontFamily && item.fontFamily.value) || defaultComponent.text.fontFamily,
        fontSize: (item.fontSize && item.fontSize.value) || defaultComponent.text.fontSize,
        fontWeight: (item.fontWeight && item.fontWeight.value) || defaultComponent.text.fontWeight,
        lineHeight: item.lineHeight + 'px' || defaultComponent.text.lineHeight + 'px',
        letterSpacing: item.letterSpacing + 'px' || defaultComponent.text.letterSpacing + 'px',
        justifyContent: item.justifyContent || defaultComponent.text.justifyContent,
        alignItems: item.alignItems || defaultComponent.text.alignItems,
        visible: item.visible != '' ? defaultComponent.text.visible : 'visibility',
        textDecoration:
          item.textDecoration != '' ? item.textDecoration : defaultComponent.text.textDecoration,
        color: item.color ? item.color.hex : defaultComponent.text.color.hex,
        background: item.background ? item.background.hex : defaultComponent.text.background.hex,
      }}
    >
      {item.content || 'Typing here...'}
    </div>
  )
}

export default memo(TextItem)
