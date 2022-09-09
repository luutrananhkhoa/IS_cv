import { memo, useRef, useContext, useState } from 'react'
import { designTabComponents } from '@page/CustomCV/ItemTypes'

import styles from './styles.module.scss'
import clsx from 'clsx'
import { Web3Context } from '@context/Web3ContextProvider'

export const DraggableBox = memo(function DraggableBox({id,  data , profile}) {
  console.log(data)
  return (
    <div
      style={{
        position: "absolute",
        marginTop: data.top + 'px',
        marginLeft: data.left + 'px',
        width: data.width + 'px',
        height: data.height + 'px',
      }}
    >
      {designTabComponents[data.type].view(id, data, profile)}
    </div>
  )
})
