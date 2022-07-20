import React, { useCallback, useContext, useEffect, useState } from 'react'
import avt from '@asset/avt_illu.jpg'
import Progressbar from '../../Component/Progressbar'
import { BsGithub, BsFillCalendar2DateFill, BsLinkedin } from 'react-icons/bs'
import { useNavigate, Link } from 'react-router-dom'
import ModalWarning from '../../Component/ModalWarning'
import { Context } from '../../Context/Context'
import { Web3Context } from '../../Context/Web3ContextProvider'
import ChangeAvatar from './ChangeAvatar'

const Index = () => {
  let navigate = useNavigate()
  const { setIsLoggedIn } = useContext(Context)
  const { contractStudentBusiness, address, removeJwtEmployee } = useContext(Web3Context)
  const [skills, setSkills] = useState()
  const [profile, setProfile] = useState()
  const [changeAvatar, setChangeAvatar] = useState()

  function HandleClick() {
    removeJwtEmployee()
    setIsLoggedIn(false)
    navigate('/')
  }

  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getStudentSkill(address)
        .call()
        .then((success) => {
          setSkills(success)
        })
        .catch((error) => console.error(error))

      contractStudentBusiness.methods
        .getStudentProfile(address)
        .call()
        .then(function (success) {
          setProfile({
            Birthday: success[2],
            Email: success[4],
            Github: success[5],
            Linked: success[6],
            Name: success[1],
            ProfessionalTitle: success[3],
          })
        })
        .catch((error) => console.error(error))
    }
  }, [contractStudentBusiness])

  const [openModalWarning, setOpenModalWarning] = useState(false)

  return (
    <>
      <ChangeAvatar state={[changeAvatar, setChangeAvatar]}></ChangeAvatar>
      <div className="min-h-screen min-w-full bg-primary pt-[3rem] pb-[8rem]">
        {/* <ModalWarning state={[openModalWarning, setOpenModalWarning]} /> */}
        <div className="w-[70%] h-[100%] mx-auto pt-[4rem] bg-white rounded-md flex flex-col pb-10">
          <div className="w-full px-10 flex justify-between">
            <div className="flex">
              <img
                src={avt}
                alt="Avatar"
                className="h-[160px] w-[10rem] rounded-md block object-cover"
              />
              <div className="flex flex-col">
                <h1 className="ml-6 text-[2rem] font-bold">{profile?.Name}</h1>
                <h1 className="ml-6 text-[1.5rem] text-gray-600">{profile?.ProfessionalTitle}</h1>
                <button
                  className="h-[45px] w-[140px] bg-orange-btn rounded-[30px] text-white text-md"
                  onClick={() => setChangeAvatar(true)}
                >
                  Change avatar
                </button>
              </div>
            </div>

            <button
              className="h-[45px] w-[140px] bg-orange-btn rounded-[30px] text-white text-xl"
              onClick={HandleClick}
            >
              Log out
            </button>
          </div>
          <div className="mt-10 px-10 flex justify-between">
            <div className="w-[35%] bg-gray-bg px-10 py-5 rounded-md">
              <div className="flex justify-between mb-2">
                <h1 className="text-[1.5rem] font-bold">My Skill</h1>
                <Link
                  to="/register"
                  className="px-4 py-1 bg-orange-btn rounded-[30px] text-white text-xl"
                >
                  Add skill
                </Link>
              </div>
              <div>
                {skills &&
                  skills[0].map((item, index) => (
                    <Progressbar key={item} title={item} percent={skills[1][index]} />
                  ))}
              </div>
            </div>
            <div className="w-[60%] bg-gray-bg px-5 py-5 rounded-md">
              <div className="flex justify-between ">
                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                  <div className="flex items-center">
                    {/* <IoMdMail size="2rem" className="text-secondary" /> */}
                    <i className="fa-solid fa-envelope fa-2xl text-secondary"></i>
                    <p className="ml-2 text-md">Email</p>
                  </div>
                  <p className="py-2 w-[100%] break-words">{profile?.Email}</p>
                </div>
                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                  <div className="flex items-center">
                    <BsFillCalendar2DateFill size="2rem" className="text-secondary" />
                    <p className="ml-2 text-md">Birth Date</p>
                  </div>
                  <p className="py-2 w-[100%] break-words">{profile?.Birthday}</p>
                </div>
              </div>
              <div className="mt-5 flex justify-between">
                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                  <div className="flex items-center">
                    <BsGithub size="2rem" className="text-secondary" />
                    <p className="ml-2 text-md">Github</p>
                  </div>
                  <p className="py-2 w-[100%] break-words">{profile?.Github}</p>
                </div>
                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                  <div className="flex items-center">
                    <BsLinkedin size="2rem" className="text-secondary" />
                    <p className="ml-2 text-md">LinkedIn</p>
                  </div>
                  <p className="py-2 w-[100%] break-words">{profile?.Linked}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Index
