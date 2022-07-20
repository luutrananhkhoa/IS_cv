import React, { useCallback, useContext, useEffect } from 'react'
import avt from '@asset/avt_illu.jpg'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { Web3Context } from '../../../Context/Web3ContextProvider'

const Index = () => {
  let navigate = useNavigate()
  const { profileBusiness, setProfileBusiness, setIsLoggedIn } = useContext(Context)
  const { contractStudentBusiness, address } = useContext(Web3Context)
  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/company')
  }
  const setProfileBusinessCallback = useCallback(
    (res) => {
      setProfileBusiness({
        AddressCompany: res?.[0],
        Name: res?.[1],
        Country: res?.[2],
        Business: res?.[3],
        Linked: res?.[4],
        Website: res?.[5],
        Facebook: res?.[6],
      })
    },
    [address]
  )

  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getBusinessProfile(address)
        .call()
        .then((result) => setProfileBusinessCallback(result))
        .catch((error) => console.log(error))
    }
  }, [contractStudentBusiness])
  // console.log(profileBusiness)
  return (
    <div className="min-h-screen min-w-full bg-primary pt-[4rem] pb-[8rem]">
      <div className="w-[60%] h-[100%] mx-auto pt-[4rem] bg-white rounded-md flex flex-col pb-10">
        <div className="w-full px-10 flex justify-between">
          <div className="flex">
            <img
              src={avt}
              alt="Avatar"
              className="h-[160px] w-[10rem] rounded-md block object-cover"
            />
            <div className="flex flex-col">
              <h1 className="ml-6 text-[2rem] font-bold">{profileBusiness.Name}</h1>
              <p className="ml-6 text-[1rem] text-gray-600">{profileBusiness?.Country}</p>
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
  )
}
export default Index
