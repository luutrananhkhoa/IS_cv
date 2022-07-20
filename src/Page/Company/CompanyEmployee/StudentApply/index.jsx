import React, { useState, useContext, useEffect, memo } from 'react'
import { Link } from 'react-router-dom'
import { Web3Context } from '../../../../Context/Web3ContextProvider'

const Index = (props) => {
  const { contractStudentBusiness } = useContext(Web3Context)
  const { address, title } = props
  const [profile, setProfile] = useState()
  useEffect(() => {
    contractStudentBusiness.methods
      .getStudentProfile(address)
      .call()
      .then(function (success) {
        setProfile({
          birthday: success[2],
          email: success[4],
          github: success[5],
          linked: success[6],
          name: success[1],
          professionalTitle: success[3],
        })
        return
      })
  }, [])

  return (
    <>
      <Link
        to={`/mycv?address=${address}`}
        className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer"
      >
        <p className="w-[40%]">{profile?.name}</p>
        <p className="w-[40%]">{title.toString()}</p>
      </Link>
    </>
  )
}

export default memo(Index)
