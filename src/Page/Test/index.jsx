import { useState, useEffect, useRef } from 'react'
import { useToast } from '@component/Toast'
import OptionMenu from '@component/OptionMenu'
import Toggle from '@component/Toggle'
import Resizer from 'react-image-file-resizer'
import socketIOClient from 'socket.io-client'

export default function Test() {
  const toast = useToast()
  const [checked, setChecked] = useState(false)
  const [image, setImage] = useState()
  const [result, setResult] = useState()

  const socketRef = useRef()
  const [mess, setMess] = useState([])
  const [message, setMessage] = useState('')
  const [id, setId] = useState()
  const host = 'http://localhost:4000'
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host)

    socketRef.current.on('getId', (data) => {
      setId(data)
      console.log(data)
    }) // phần này đơn giản để gán id cho mỗi phiên kết nối vào page. Mục đích chính là để phân biệt đoạn nào là của mình đang chat.

    socketRef.current.on('sendDataServer', (dataGot) => {
     console.log(dataGot)
    }) // mỗi khi có tin nhắn thì mess sẽ được render thêm

    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  const handleSend = () => {
    const msg = {
      content: 'a',
      add: id,
    }
    socketRef.current.emit('sendDataClient', msg)

    /*Khi emit('sendDataClient') bên phía server sẽ nhận được sự kiện có tên 'sendDataClient' và handle như câu lệnh trong file index.js
          socket.on("sendDataClient", function(data) { // Handle khi có sự kiện tên là sendDataClient từ phía client
            socketIo.emit("sendDataServer", { data });// phát sự kiện  có tên sendDataServer cùng với dữ liệu tin nhắn từ phía server
          })
    */
  }

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
      <div class="box-chat">
        <div class="box-chat_message">// phần này cho tin nhắn</div>

        <div class="send-box">
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </>
  )
}
