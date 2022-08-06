import React, { useContext, useState, useEffect } from 'react'
import logo1 from '@asset/LogoCV.png'
import { useNavigate, Link } from 'react-router-dom'
import { Context } from '@context/Context'
import { Web3Context } from '@context/Web3ContextProvider'
import { RingLoader } from 'react-spinners'
import { useToast } from '@component/Toast'

const Index = () => {
  const { contractStudentBusiness, address, setJwtCompany } = useContext(Web3Context)

  const toast = useToast()
  
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState()

  const { setIsLoggedIn } = useContext(Context)

  let navigate = useNavigate()
  async function checkBPro() {
    setLoading(true)

    await Promise.allSettled([
      await contractStudentBusiness.methods
        .checkBusinessProfile(address, password)
        .call()
        .then((result) => {
          if (parseInt(result) == 1) {
            setJwtCompany(address)
            setIsLoggedIn(true)
            toast.success('success', { pauseOnHover: true, closeOnClick: true })
            navigate('/company')
          } else {
            // setDialog(true)
          }
        })
        .catch((error) => {
          console.log(error)
          if (error.code === 4001)
            toast.warning('is unpaid', { pauseOnHover: true, closeOnClick: true })
        }),

      await contractStudentBusiness.methods
        .checkIIGProfile(address, password)
        .call({ from: address })
        .then((success) => {
          if (parseInt(success) == 1) {
            setJwtCompany(address)
            setIsLoggedIn(true)
            navigate('/company')
          } else {
            // setDialog(true)
          }
        })
        .catch((error) => {
          console.log(error)
          if (error.code === 4001)
            toast.warning('is unpaid', { pauseOnHover: true, closeOnClick: true })
        }),
    ])
      .then((success) => {
        console.log(success)
      })
      .catch((error) => console.log(error))
    setLoading(false)
  }

  return (
    <>
      <RingLoader
        color={'#133ceb'}
        loading={loading}
        cssOverride={{ position: 'fixed', top: '40%', left: '45%', transform: 'trans' }}
        size={150}
      />
      <div className="h-[100vh] w-[100vw] bg-primary flex overflow-hidden justify-center">
        <div className="w-[50%] flex flex-col mt-12 bg-primary">
          <Link to="/company">
            <img className="w-[20%] mx-auto cursor-pointer object-cover" src={logo1} alt="logo" />
          </Link>
          <div className="w-[50%] h-[60%] mt-[2rem] mx-auto bg-secondary rounded-[15px]">
            <h1 className="pt-[20px] text-white text-2xl text-center ">Login for Company</h1>
            <div className=" pt-6 flex flex-col ">
              <div className="w-[75%]  mt-6 mx-auto">
                <label name="email" className="text-white">
                  Your address
                </label>
                <br />
                <input
                  type="text"
                  name="address_business"
                  id="address_business"
                  placeholder="0x00000"
                  value={address}
                  onChange={(e) => {}}
                  className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"
                />
              </div>
              <div className="w-[75%] mt-2 mx-auto">
                <label name="pwd" className="text-white">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  name="pwd"
                  id="companypassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"
                />
              </div>
              <button
                onClick={checkBPro}
                className="mt-[2rem] mx-auto w-[75%] h-10 text-white bg-primary hover:bg-orange-btn ease-in duration-100 rounded-[30px]"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
