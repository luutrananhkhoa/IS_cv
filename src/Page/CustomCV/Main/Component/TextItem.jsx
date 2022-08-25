import { memo, useContext, useLayoutEffect } from 'react'
import { defaultStyle, defaultInTextStyle } from '../../config'
import styles from '../styles.module.scss'
import { CustomCVContext } from '../../CustomCVContext'
import update from 'immutability-helper'

function TextItem(props) {
  const { id, item } = props
  const { selected, list, setList } = useContext(CustomCVContext)
  useLayoutEffect(() => {
    if (selected != id) setList(update(list, { [id]: { $merge: { typing: false } } }))
  }, [selected])
  return (
    <div className={styles.componentText} style={defaultStyle(item)}>
      {list[id].typing ? (
        <input
          value={list[id]?.content}
          type="text"
          onChange={(e) => {
            setList(update(list, { [id]: { $merge: { content: e.target.value } } }))
          }}
          className={styles.text}
          style={defaultInTextStyle(item)}
        ></input>
      ) : (
        <p   style={defaultInTextStyle(item)}  className={styles.text}>
          {item?.content || 'Typing here...'}
        </p>
      )}
    </div>
  )
}

export default memo(TextItem)
