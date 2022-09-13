import { createContext, useState, useEffect, useContext, useRef } from 'react'
import { Web3Context } from '@context/Web3ContextProvider'
import { getListMessagesByTime as getListMessagesByTimeEmployee } from '@api/messages/employee'
import { getListMessagesByTime as getListMessagesByTimeBusiness } from '@api/messages/business'
import socketIOClient from 'socket.io-client'
import { API_ENDPOINT_NODEJS } from '@constant/index'
import { useParams } from 'react-router-dom'

export const ChatContext = createContext()

const ChatContextProvider = ({ children }) => {
  const { loginState } = useContext(Web3Context)
  const id = parseInt(useParams().id)
  const [list, setList] = useState([])
  useEffect(() => {
    if (loginState.for == 'employee') {
      getListMessagesByTimeEmployee(loginState.id, id, 0, new Date().getTime())
        .then((success) => {
          setList(success.data)
        })
        .catch((error) => console.error(error))
    }
    if (loginState.for == 'business') {
      getListMessagesByTimeBusiness(loginState.id, id, 0, new Date().getTime())
        .then((success) => {
          setList(success.data)
        })
        .catch((error) => console.error(error))
    }
  }, [id])
  const lastSend = useRef({
    _idEmployee: 0,
    _idBusiness: 0,
    date: 0,
  })
  const socketRef = useRef()
  useEffect(() => {
    socketRef.current = socketIOClient.connect(API_ENDPOINT_NODEJS)
    if (loginState.for == 'business') {
      socketRef.current.on('businessSendSuccess' + loginState.id, (data) => {
        lastSend.current = data
        setList((e) => {
          return [...e, data]
        })
      })
      socketRef.current.on('businessRecive' + loginState.id, (data) => {
        setList((e) => {
          return [...e, data]
        })
      })
    }
    if (loginState.for == 'employee') {
      socketRef.current.on('employeeSendSuccess' + loginState.id, (data) => {
        lastSend.current = data

        setList((e) => {
          return [...e, data]
        })
      })
      socketRef.current.on('employeeRecive' + loginState.id, (data) => {
        setList((e) => {
          return [...e, data]
        })
      })
    }

    return () => {
      socketRef.current.disconnect()
    }
  }, [])
  const handleSend = (content) => {
    if (loginState.for == 'employee') {
      let data = {
        _idEmployee:
          new Date().getTime() - lastSend.current?.date <= 5 * 60 * 60
            ? lastSend.current?._idEmployee
            : undefined,
        _idBusiness:
          new Date().getTime() - lastSend.current?.date <= 5 * 60 * 60
            ? lastSend.current?._idBusiness
            : undefined,
        employeeId: loginState.id,
        businessId: id,
        type: true,
        content: content,
      }
      socketRef.current.emit('employeeSend', data)
    }

    if (loginState.for == 'business') {
      let data = {
        _idEmployee:
          new Date().getTime() - lastSend.current?.date <= 5 * 60 * 60
            ? lastSend.current?._idEmployee
            : undefined,
        _idBusiness:
          new Date().getTime() - lastSend.current?.date <= 5 * 60 * 60
            ? lastSend.current?._idBusiness
            : undefined,
        employeeId: id,
        businessId: loginState.id,
        type: true,
        content: content,
      }
      socketRef.current.emit('businessSend', data)
    }
  }
  const data = { list, setList, socketRef, handleSend }
  return <ChatContext.Provider value={data}>{children}</ChatContext.Provider>
}

export default ChatContextProvider
