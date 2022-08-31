import { useState } from 'react'
import { useToast } from '@component/Toast'
import OptionMenu from '@component/OptionMenu'
import Toggle from '@component/Toggle'

export default function Test() {
  const toast = useToast()
  const [checked, setChecked] = useState(false)
  return (
    <>
      <button onClick={() => toast.success('success', { time: 30000, pauseOnHover: true })}>
        success
      </button>
      <button onClick={() => toast.info('info', { time: 30000, pauseOnHover: true })}>info</button>
      <button onClick={() => toast.warning('warning', { time: 30000, pauseOnHover: true })}>
        warning
      </button>
      <button onClick={() => toast.error('error', { time: 30000, pauseOnHover: true })}>
        error
      </button>
      <button onClick={() => toast.clear()}>clear</button>
      <Toggle state={[checked, setChecked]}></Toggle>
      <div style={{ position: 'fixed', right: 0, top: '100px' }}>
        <OptionMenu></OptionMenu>
      </div>
    </>
  )
}
