import React, { useContext, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import PostItem from '@component/PostItem'
import ItemRequest from './ItemRequest'
import { Link, useSearchParams } from 'react-router-dom'
import { getContract as getContractBusiness } from '@contract/businessController'
import { Web3Context } from '@context/Web3ContextProvider'
import _ from 'lodash'
import Navigation from '../../Components/Navigation'

// Dashboard/ViewPost/index
function Index() {
  const { loginState } = useContext(Web3Context)
  const [post, setPost] = useState()
  const [searchParams] = useSearchParams()
  const postBusinessId = searchParams.get('businessPostId')
  const [applier, setApplier] = useState()

  const getPost = () => {
    getContractBusiness()
      .then((contract) => {
        contract.methods
          .getPost(postBusinessId)
          .call()
          .then((success) => {
            setPost({ ...success })
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
  }

  const getApplier = () => {
    getContractBusiness()
      .then((contract) => {
        contract.methods
          .getApplierOfPost(postBusinessId)
          .call()
          .then((success) => {
            let temp = []
            _.forEach(success, (value, index) => {
              temp.push({ ...value })
            })
            setApplier(temp)
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getPost()
    getApplier()
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Navigation title={'View post'} to={-1}></Navigation>
        <div className={styles.preview}>
          {post && (
            <PostItem
              key={0}
              businessId={loginState.id}
              content={post.content}
              name={loginState.profile.name}
              time={post.time}
              postId={post.businessPostId}
              job={post.job}
              id={loginState.id}
              hashtag={post.hashTag}
              status={post.status}
            ></PostItem>
          )}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <p>Request</p>
        </div>
        <div className={styles.wrapper}>
          {post &&
            applier?.map((value, index) => {
              return <ItemRequest key={index} {...value} job={post.job}></ItemRequest>
            })}
        </div>
      </div>
    </div>
  )
}

export default Index
