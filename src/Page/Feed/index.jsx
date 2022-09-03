import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import PostItem from '../../Component/PostItem'
import Search from './Search'
import { getContract as getContractBusiness } from '@contract/businessController'
import _ from 'lodash'

function Index() {
  const [list, setList] = useState()
  useEffect(() => {
    getContractBusiness()
      .then((contractBusiness) => {
        contractBusiness.methods
          .getAllPost()
          .call()
          .then((success) => {
            let temp = []
            _.forEach(success, (value, index) => {
              temp.push({ ...value })
            })
            temp.sort((o) => parseInt(o.requestDate), 'desc')
            setList(temp)
          })
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className={styles.container}>
      <Search></Search>
      {list?.map((value, index) => {
        return <PostItem key={index} {...value} hashtag={value.hashTag}></PostItem>
      })}
    </div>
  )
}

export default Index
