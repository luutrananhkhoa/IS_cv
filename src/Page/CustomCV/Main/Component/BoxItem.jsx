import { memo } from 'react'

const styles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
  whiteSpace: 'nowrap',
}

function BoxItem() {
  return <div style={{ ...styles }}></div>
}

export default memo(BoxItem)
