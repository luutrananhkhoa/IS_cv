import React, { useState, useContext, useEffect } from 'react'
import styles from './styles.module.scss'
import avatarMen from '@asset/avatar_men.png'
import clsx from 'clsx'
import CommentItem from '../CommentItem'
import PostStatus from '../PostStatus'
import { Web3Context } from '@context/Web3ContextProvider'
import Modal from '@component/Modal'
import { useLoading } from '@component/Loading'
import { useToast } from '@component/Toast'
import { getContract as getContractEmployee } from '@contract/employeeController'
import { getContract as getContractBusiness } from '@contract/businessController'
import { useParams } from 'react-router-dom'

// Component/PostItem
function Item({ content, name, avatar, time, postId, job, hashtag, status, id }) {
  const [comment, setComment] = useState('')
  const [openClose, setOpenClose] = useState(false)
  const { loginState } = useContext(Web3Context)
  const [applied, setApplied] = useState(false)
  const businessId = useParams().id
  const toast = useToast()
  const loading = useLoading()
  const handleApplyPost = async () => {
    if (loginState.for != 'employee') {
      toast.warning('not employee', { pauseOnHover: true, closeOnClick: true })
      return
    }
    loading.open()
    await getContractEmployee()
      .then(async (contract) => {
        await contract.methods
          ._checkExistApply(loginState.id, postId)
          .call({ from: loginState.address })
          .then(async (check) => {
            if (check) {
              toast.warning('had applied', { pauseOnHover: true, closeOnClick: true })
              return
            }
            await contract.methods
              .applyPost(loginState.id, businessId, postId)
              .send({ from: loginState.address })
              .then((success) => {
                toast.success('success', { pauseOnHover: true, closeOnClick: true })
              })
              .catch((error) => console.log(error))
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))

    loading.close()
  }
  const handleClosePost = async () => {
    if (loginState.for != 'business') {
      toast.warning('not business', { pauseOnHover: true, closeOnClick: true })
      return
    }
    loading.open()
    await getContractBusiness()
      .then(async (contract) => {
        await contract.methods
          ._checkPostIdBelongstoId(loginState.id, postId)
          .call({ from: loginState.address })
          .then(async (success) => {
            if (!success) {
              toast.error('khong phai chu bai viet', { pauseOnHover: true, closeOnClick: true })
              return
            }
            await contract.methods
              .setStatusPost(loginState.id, postId, 2)
              .send({ from: loginState.address })
              .then((success) => {
                toast.success('success', { pauseOnHover: true, closeOnClick: true })
                setOpenClose(false)
              })
              .catch((error) => console.log(error))
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))

    loading.close()
  }
  const checkApply = async () => {
    await getContractEmployee().then(async (contract) => {
      await contract.methods
        ._checkExistApply(loginState.id, postId)
        .call({ from: loginState.address })
        .then(async (check) => {
          if (check) {
            setApplied(true)
            return
          }
        })
        .catch((error) => console.log(error))
    })
  }
  useEffect(() => {
    checkApply()
  }, [])
  return (
    <>
      <Modal
        state={[openClose, setOpenClose]}
        title="confirm"
        content={
          <div div className={styles.closeModal}>
            Are you sure to close this post?
          </div>
        }
        action={handleClosePost}
      ></Modal>

      <div className={styles.item}>
        <div className={styles.head}>
          <div className={styles.personalWrapper}>
            <div className={styles.avatarWrapper}>
              <img src={avatar ? URL.createObjectURL(avatar) : avatarMen}></img>
            </div>
            <div className={styles.avatarTextWrapper}>
              <div className={styles.name}>{name}</div>
              <div className={styles.date}>{new Date(parseInt(time)).toLocaleString()}</div>
              <PostStatus
                type={
                  (status == 1 && 'open') || (status == 2 && 'close') || (status == 3 && 'upcoming')
                }
              ></PostStatus>
            </div>
          </div>
          <div className={styles.option}>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <div className={styles.hashtag}>
          <i className="fa-regular fa-hashtag"></i>
          <a>{hashtag}</a>
        </div>
        <div className={styles.job}>
          <i className="fa-solid fa-tags"></i>
          <a>{job}</a>
        </div>
        <div className={styles.contentWrapper}>
          <p>{content}</p>
          <img
            className={styles.imageContent}
            src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
          ></img>
        </div>
        <div className={styles.foot}>
          <div className={styles.footItem}>
            <i className="fa-regular fa-heart"></i>
            <div className={styles.footItemTitle}>25 Like</div>
          </div>
          <div className={styles.footItem}>
            <i className="fa-regular fa-comment"></i>
            <div className={styles.footItemTitle}>10 Comment</div>
          </div>
          <div className={styles.footItem}>
            <i className="fa-regular fa-bookmark"></i>
            <div className={styles.footItemTitle}>Bookmark</div>
          </div>
          <div className={styles.footItem}>
            <i className="fa-light fa-share-nodes"></i>
            <div className={styles.footItemTitle}>Share</div>
          </div>
          {!applied && loginState.for == 'employee' && (
            <button onClick={handleApplyPost} className={styles.footItem}>
              <div className={styles.buttonApply}>Apply</div>
            </button>
          )}
          {loginState.for == 'business' && id == loginState.id && parseInt(status) == 1 && (
            <button onClick={() => setOpenClose(true)} className={styles.footItem}>
              <div className={styles.buttonApply}>Close</div>
            </button>
          )}
          {loginState.for == 'employee' && applied && (
            <button className={styles.footItem}>
              <div className={clsx(styles.buttonApply, styles.applied)}>Applied</div>
            </button>
          )}
        </div>
        <div className={styles.commentWrapper}>
          <div className={styles.commentItem}>
            <img src={avatarMen} className={styles.commentIcon}></img>
            <div className={styles.commentInputWrapper}>
              <textarea
                onKeyDown={(e) => {
                  e.target.style.height = 'inherit'
                  e.target.style.height = `${e.target.scrollHeight}px`
                }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment.."
              ></textarea>
              <div className={styles.commentTool}>
                <i className={clsx(styles.commentSend, 'fa-solid fa-paper-plane-top')}></i>
              </div>
            </div>
          </div>
          <CommentItem key={0}></CommentItem>
        </div>
      </div>
    </>
  )
}

export default Item
