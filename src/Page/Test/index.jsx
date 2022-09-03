import { useState, useEffect } from 'react'
import { useToast } from '@component/Toast'
import OptionMenu from '@component/OptionMenu'
import Toggle from '@component/Toggle'
import Resizer from 'react-image-file-resizer'

export default function Test() {
  const toast = useToast()
  const [checked, setChecked] = useState(false)
  const [image, setImage] = useState()
  const [result, setResult] = useState()
  useEffect(() => {
    if (!image) return
  }, [image])
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
        {/* <OptionMenu></OptionMenu> */}
      </div>

      <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
    </>
  )
}
