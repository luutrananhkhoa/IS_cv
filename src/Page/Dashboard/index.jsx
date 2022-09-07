import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Left from './Left'
import styles from './styles.module.scss'
import Main from './Main'
import Posts from './Posts'
import { useSearchParams } from 'react-router-dom'
import ViewPost from './Posts/ViewPost'
import Certificates from './Certificates'

function Index() {
  const [searchParams] = useSearchParams()
  return (
    <div className={styles.container}>
      <Left></Left>
      <div className={styles.right}>
        {(() => {
          switch (searchParams.get('tab')) {
            case 'posts':
              return <Posts></Posts>
            case 'certificates':
              return <Certificates></Certificates>
            default:
              return <Main></Main>
          }
        })()}
      </div>
    </div>
  )
}

export default Index