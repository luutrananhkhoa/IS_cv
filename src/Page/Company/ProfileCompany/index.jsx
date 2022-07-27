import React, { useCallback, useContext, useEffect, useState } from 'react'
import avt from '@asset/avt_illu.jpg'
import { useNavigate, Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { Web3Context } from '../../../Context/Web3ContextProvider'
import * as profileApi from '@api/company/profile'
import ChangeAvatar from './ChangeAvatar'

const Index = () => {
  let navigate = useNavigate()
  const [profileBusiness, setProfileBusiness] = useState()
  const { setIsLoggedIn, isIIg } = useContext(Context)
  const { contractStudentBusiness, address, removeJwtCompany } = useContext(Web3Context)
  const [changeAvatar, setChangeAvatar] = useState()
  const [avatar, setAvatar] = useState()
  const handleLogout = () => {
    removeJwtCompany()
    setIsLoggedIn(false)
    navigate('/company')
  }

  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getBusinessProfile(address)
        .call()
        .then((success) =>
          setProfileBusiness({
            AddressCompany: success?.[0],
            Name: success?.[1],
            Country: success?.[2],
            Business: success?.[3],
            Linked: success?.[4],
            Website: success?.[5],
            Facebook: success?.[6],
          })
        )
        .catch((error) => console.log(error))

      profileApi
        .getAvatar(address)
        .then((success) => {
          setAvatar(new Blob([success.data], { type: success.headers['content-type'] }))
        })
        .catch((error) => console.error(error))
    }
  }, [contractStudentBusiness])

  return (
    <>
      <ChangeAvatar
        state={[changeAvatar, setChangeAvatar]}
        address={address}
        avatar={avatar}
        setAvatar={setAvatar}
      ></ChangeAvatar>
      <div className="min-h-screen min-w-full bg-primary pt-[4rem] pb-[8rem]">
        <div className="w-[60%] h-[100%] mx-auto pt-[4rem] bg-white rounded-md flex flex-col pb-10">
          <div className="w-full px-10 flex justify-between">
            <div className="flex">
              <img
                src={avatar ? URL.createObjectURL(avatar) : avt}
                alt="Avatar"
                className="h-[160px] w-[10rem] rounded-md block object-cover"
              />
              <div className="ml-6  flex flex-col">
                <h1 className="text-[2rem] font-bold">{profileBusiness?.Name}</h1>
                <p className="text-[1rem] text-gray-600">{profileBusiness?.Country}</p>
                <button
                  className="py-1 px-2 bg-orange-btn rounded-[30px] text-white text-md"
                  onClick={() => setChangeAvatar(true)}
                >
                  Change avatar
                </button>
                <Link
                to = "/company/dashboard/iig"
                  className="py-1  my-2 px-2 bg-secondary rounded-[30px] text-white text-md"
                >
                  Open Dashboard
                </Link>
              </div>
            </div>
            <div className="">
              <button
                onClick={handleLogout}
                className="h-[45px] w-[140px] bg-orange-btn rounded-[30px] text-white text-xl"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Index
