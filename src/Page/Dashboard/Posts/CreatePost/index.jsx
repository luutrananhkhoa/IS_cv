import React, { useState, useEffect, useContext } from 'react'
import styles from './styles.module.scss'
import PostItem from '@component/PostItem'
import { Dropdown } from '@component/Dropdown'
import TextField from '@component/TextField'
import { Web3Context } from '@context/Web3ContextProvider'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import { useLoading } from '@component/Loading'
import { useToast } from '@component/Toast'
import { getContract } from '@contract/businessController'
import Navigation from '../../Components/Navigation'

// Page/Create Post
function Index() {
  const [hashtag, setHashtag] = useState('hashtag')
  const [content, setContent] = useState('')
  const [job, setJob] = useState('')
  const navigate = useNavigate()
  const loading = useLoading()
  const toast = useToast()
  const { loginState } = useContext(Web3Context)

  const handlePublish = async () => {
    loading.open()
    await getContract()
      .then(async (success) => {
        await success.methods
          .addPost(loginState.id, hashtag, job, content, '/', 1)
          .send({ from: loginState.address })
          .then((success) => {
            toast.success('success', { pauseOnHover: true, closeOnClick: true })
            navigate('/dashboard?tab=posts')
          })
          .catch((error) => {
            console.error(error)
            if (error.code === 4001)
              toast.warning('chua thanh toan', { pauseOnHover: true, closeOnClick: true })
            toast.error('error', { pauseOnHover: true, closeOnClick: true })
          })
      })
      .catch((error) => console.log(error))

    loading.close()
  }
  return (
    <div className={styles.container}>
      <Navigation title={'Create Post'} to={-1}></Navigation>

      <div className={styles.group}>
        <div className={styles.left}>
          <div className={styles.image}>
            <div className={styles.panelTitle}>
              <a>Media</a>
            </div>
            <button className={styles.imageTool}>
              <i className="fa-regular fa-hexagon-image"></i>
              <a>Add Photo</a>
            </button>
          </div>
          <div className={styles.job}>
            <div className={styles.panelTitle}>
              <a>Job</a>
            </div>
            <input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className={styles.jobInput}
              placeholder="Type your job..."
            ></input>
          </div>
          <div className={styles.content}>
            <div className={styles.panelTitle}>
              <a>Text</a>
            </div>
            <Dropdown
              content={
                <div className={styles.contentDropdown}>
                  <span onClick={() => setHashtag('common')}>common</span>
                  <span onClick={() => setHashtag('recruit')}>recruit</span>
                </div>
              }
              state={[hashtag, setHashtag]}
            >
              <div className={styles.hashtag}>
                <i className={'fa-solid fa-star'}></i>
                <a>{hashtag}</a>
              </div>
            </Dropdown>

            <TextField value={content} onChange={setContent}></TextField>
            <div className={styles.tool}></div>
          </div>

          <div className={styles.button}>
            <button onClick={handlePublish} className={styles.publish}>
              Publish
            </button>
            <Link to="/dashboard?tab=posts" className={styles.cancel}>
              Cancel
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <PostItem
            name={loginState.name}
            time={'Just now'}
            content={content}
            job={job}
            hashtag={hashtag}
            status={'open'}
          ></PostItem>
        </div>
      </div>
    </div>
  )
}

export default Index