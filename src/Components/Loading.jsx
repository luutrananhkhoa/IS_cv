import React, { memo } from 'react'

/**
 * to Create Loading
 * @param title: string
 * @param content: string
 * @param action: function
 * @returns
 */
function Loading(props) {
  return (
    <>
      <RingLoader
        color={'#133ceb'}
        loading={loading}
        cssOverride={{ position: 'fixed', top: '40%', left: '45%', transform: 'trans' }}
        size={150}
      />
    </>
  )
}
export default memo(Loading)
