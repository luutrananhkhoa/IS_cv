import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import PostItem from '../../Component/PostItem'
import Search from './Search'
import { getContract as getContractBusiness } from '@contract/businessController'
import _ from 'lodash'
import { getImage as getBusinessPostImage } from '@api/business/post'

function Index() {
  const [list, setList] = useState()
  useEffect(() => {
    getContractBusiness()
      .then((contractBusiness) => {
        contractBusiness.methods
          .getAllPost()
          .call()
          .then(async (success) => {
            let temp = []
            for (let i = 0; i < success.length; i++) {
              let imageTemp = undefined
              await getBusinessPostImage(success[i].id, success[i].imageSource)
                .then((image) => {
                  imageTemp = image
                })
                .catch((error) => console.error(error))
              temp.push({ ...success[i], image: imageTemp })
            }
            setList(temp)
          })
      })
      .catch((error) => console.log(error))
  }, [])
  console.log(list)
  return (
    <div className={styles.container}>
      <Search></Search>
      {list
        ?.map((value, index) => {
          return (
            <PostItem
              key={index}
              {...value}
              hashtag={value.hashTag}
              postId={value.businessPostId}
              typeFor="business"
            ></PostItem>
          )
        })
        .reverse()}
    </div>
  )
}

export default Index
