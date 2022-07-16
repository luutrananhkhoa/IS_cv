import React, { useContext, useState } from 'react'
import logo1 from '../assets/LogoCV.png'
import { useNavigate, Link } from 'react-router-dom'
import { Context } from '../Context/Context'
import { Web3Context } from '../Context/Web3ContextProvider'

const LoginComany = () => {
  const { contractStudentBusiness } = useContext(Web3Context)

  const { addr, setAddr, statusB, setStatusB, addrCompany, setAddrCompany } = useContext(Context)
  const [diaglog, setDialog] = useState(false)

  let navigate = useNavigate()
  const HandleClick = () => {
    navigate('/')
  }
  function checkBPro(e) {
    e.preventDefault()
    setAddrCompany($('#_addressBusiness').val())
    contractStudentBusiness.methods
      .checkBusinessProfile($('#_addressBusiness').val(), $('#_pwdBusiness').val())
      .call()
      .then((result) => {
        console.log(parseInt(result))
        if (parseInt(result) == 1) {
          console.log('Successfully')
          navigate('/homecompany')
          setStatusB(true)
        } else {
          console.log('Unsuccessfully')
          setDialog(true)
        }
      })
  }
  return (
    <div className="h-[100vh] w-[100vw] bg-primary flex overflow-hidden justify-center">
      <div className="w-[50%] flex flex-col mt-12 bg-primary">
        <img
          className="w-[20%] mx-auto cursor-pointer object-cover"
          src={logo1}
          alt="logo"
          onClick={HandleClick}
        />
        <div className="w-[50%] h-[60%] mt-[2rem] mx-auto bg-secondary rounded-[15px]">
          <h1 className="pt-[20px] text-white text-2xl text-center ">Login for Company</h1>
          <div className=" pt-6 flex flex-col ">
            <div className="w-[75%]  mt-6 mx-auto">
              <label name="email" className="text-white">
                Your address
              </label>{' '}
              <br />
              <input
                type="text"
                name="addressOwner"
                id="_addressBusiness"
                placeholder="0x00000"
                className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"
              />
            </div>
            <div className="w-[75%] mt-2 mx-auto">
              <label name="pwd" className="text-white">
                Password
              </label>{' '}
              <br />
              <input
                type="text"
                name="pwd"
                id="_pwdBusiness"
                placeholder="123456"
                className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"
              />
              {diaglog && <span className="">Invalid!</span>}
            </div>
            <button
              onClick={checkBPro}
              className="mt-[2rem] mx-auto w-[75%] h-10 text-white bg-primary hover:bg-orange-btn ease-in duration-100 rounded-[30px]"
            >
              Sign in
            </button>
            <h3 className=" text-white text-sm mx-auto font-medium mt-4">
              Not a member?
              <Link to="/companymanage" className="text-primary text-sm font-bold mt-4">
                {' '}
                SIGN UP
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComany
