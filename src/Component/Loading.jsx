import React, { memo } from 'react'
import { RingLoader } from 'react-spinners'
/**
 * to Create Loading
 * @param title: string
 * @param content: string
 * @param action: function
 * @returns
 */
function Loading(props) {
  const open = props.state
  return (
    <>
      {open && (
        <>
          <div className="fixed top-0 left-0 right-0 w-[100vw] h-[100vh] opacity-90 bg-slate-600 z-[1000]"></div>
          <div className="fixed top-0 left-0 right-0 z-[101]">
            <RingLoader
              color={'#133ceb'}
              loading={true}
              cssOverride={{
                position: 'fixed',
                top: '40%',
                left: '45%',
              }}
              size={150}
            />
          </div>
        </>
      )}
    </>
  )
}
export default memo(Loading)
