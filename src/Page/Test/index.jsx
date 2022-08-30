import { useToast } from '@component/Toast'

export default function Test() {
  const toast = useToast()
  return (
    <>
      <button onClick={() => toast.success('success', { time: 30000, pauseOnHover: true })}>
        success
      </button>
      <button onClick={() => toast.info('info', { time: 30000, pauseOnHover: true })}>
        info
      </button>
      <button onClick={() => toast.warning('warning', { time: 30000, pauseOnHover: true })}>
        warning
      </button>
      <button onClick={() => toast.error('error', { time: 30000, pauseOnHover: true })}>
        error
      </button>
      <button onClick={() => toast.clear()}>
        clear
      </button>
    </>
  )
}
