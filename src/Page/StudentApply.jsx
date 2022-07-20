import React, { useState, useContext, useEffect, memo } from 'react'
import { Context } from '../Context/Context'
import { Web3Context } from '../Context/Web3ContextProvider'

const StudentApply = (props) => {
  const { contractStudentBusiness } = useContext(Web3Context)
  const { address, title } = props
  const { addr, skills, setSkills } = useContext(Context)
  const [profile, setProfile] = useState()

  useEffect(() => {
    contractStudentBusiness.methods
      .getStudentProfile(address)
      .call()
      .then(function (success) {
        console.log(success)
        setProfile({
          Birthday: success[2],
          Email: success[4],
          Github: success[5],
          Linked: success[6],
          Name: success[1],
          ProfessionalTitle: success[3],
        })
        return
      })
  }, [])

  const handleClick = () => {
    navigate('/employeedetail')
  }
  console.log(props.address)
  return (
    <>
      <div
        className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer"
        onClick={handleClick}
      >
        <p className="w-[40%]">{profile?.Name}</p>
        {
          // console.log(props.title)
        }
        <p className="w-[40%]">{props.title.toString()}</p>
      </div>
    </>
  )
}

export default memo(StudentApply)
