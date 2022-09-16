import { useCallback, useState, useRef, useEffect, useContext, useLayoutEffect } from 'react'
import { DraggableBox } from './DraggableBox'
import styles from './styles.module.scss'
import { getContract as getContractCV } from '@contract/cvController'
import { useParams } from 'react-router-dom'
import { Web3Context } from '@context/Web3ContextProvider'
import useToObject from '@page/CustomCV/hooks/useToObject'
import { CUSTOMCVDIMENSION } from './config'
import { getContract as getContractEmployee } from '@contract/employeeController'

export default function Container(props) {
  const { loginState } = useContext(Web3Context)
  const params = useParams()
  const id = params.id
  const [list, setList] = useState({})
  const [profile, setProfile] = useState()

  useEffect(() => {
    getContractCV()
      .then((contractCV) => {
        contractCV.methods
          .getListCVByEmployeeId(id)
          .call()
          .then((success) => {
            if (!success || success.length === 0) {
              return
            }
            let result = useToObject(success[0].data)

            let temp = result.list
            let newData = Object.keys(temp).map((key) => {
              let item = temp[key]
              item.top = Math.round(item.top * CUSTOMCVDIMENSION.SCALE)
              item.left = Math.round(item.left * CUSTOMCVDIMENSION.SCALE)
              item.width = Math.round(item.width * CUSTOMCVDIMENSION.SCALE)
              item.height = Math.round(item.height * CUSTOMCVDIMENSION.SCALE)
              item.fontSize = {
                value: Math.round(item.fontSize.value * CUSTOMCVDIMENSION.SCALE),
                label: Math.round(item.fontSize.value * CUSTOMCVDIMENSION.SCALE).toString(),
              }
              item.lineHeight = Math.round(item.lineHeight * CUSTOMCVDIMENSION.SCALE)
              item.borderWidth = Math.round(item.borderWidth * CUSTOMCVDIMENSION.SCALE)
              item.borderRadius = Math.round(item.borderRadius * CUSTOMCVDIMENSION.SCALE)
              return item
            })

            setList(newData)
          })
          .catch((error) => console.error(error))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    getContractEmployee()
      .then((contractEmployee) => {
        contractEmployee.methods
          .getProfile(id)
          .call()
          .then((success) => {
            setProfile({ ...success })
          })
          .catch((error) => console.error(error))
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className={styles.container}>
      {profile &&
        list &&
        Object.keys(list).map((id) => {
          return <DraggableBox key={id} id={id} data={list[id]} profile={profile}></DraggableBox>
        })}
    </div>
  )
}
