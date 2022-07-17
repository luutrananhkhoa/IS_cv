import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { Context } from '../Context/Context'
import { Web3Context } from '../Context/Web3ContextProvider'
import { RingLoader } from 'react-spinners'

export default function Createcv() {
  let navigate = useNavigate()

  const { contractStudentBusiness, address } = useContext(Web3Context)

  const [checkPofile, setCheckPofile] = useState(false)
  const [loading, setLoading] = useState(false)

  const checkStudent = async () => {
    await contractStudentBusiness.methods
      .checkStudentProfile($('#_owner').val(), $('#_password').val())
      .call()
      .then((res) => setTempCheck(parseInt(res._hex)))
  }

  function addProf(e) {
    e.preventDefault()
    contractStudentBusiness.methods
      .checkStudentProfile($('#_owner').val(), $('#_password').val())
      .call()
      .then(async (result) => {
        console.log(parseInt(result))
        if (parseInt(result) == 0) {
          console.log('Successfully')
          // setaddress($('#_owner').val())
          setLoading(true)
          await contractStudentBusiness.methods
            .addStudentProfile(
              $('#_owner').val(),
              $('#_name').val(),
              $('#_birthday').val(),
              $('#_ptitle').val(),
              $('#_email').val(),
              $('#_github').val(),
              $('#_linked').val(),
              $('#_password').val()
            )
            .send({
              from: $('#_owner').val(),
              gas: 3000000,
            })
            .then((success) => {
              console.log(success)
              navigate('/')
              setIsLoggedIn(true)
            })
            .catch((error) => {
              console.log(error)
              if (error.code === 4001) alert('Bạn chưa thanh toán hoá đơn')
            })
          setLoading(false)
          // navigate('/')
          // setStatus(true)
        } else {
          console.log('Unsuccessfully')
          alert('Tài khoản đã được đăng ký!')
        }
      })
  }

  function showList(e) {
    contractStudentBusiness.methods
      .getListStudent(address)
      .call()
      .then((result) => console.log(result))
    e.preventDefault()
  }
  // console.log(address)
  return (
    <>
      <Header />
      <RingLoader
        color={'#133ceb'}
        loading={loading}
        cssOverride={{ position: 'fixed', top: '40%', left: '45%', transform: 'trans' }}
        size={150}
      />
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-primary">
        <div>
          <h1 className="text-left text-4xl text-white mt-[-20%] font-bold">CREATE MY CV</h1>
          <form action="#" className="">
            <div className="flex">
              <div className="mt-6">
                <label name="fname" className="text-white">
                  Full name
                </label>
                <br />
                <input
                  type="text"
                  id="_name"
                  name="fname"
                  required
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="Full name"
                />
              </div>
              <div className="mt-6 ml-[4rem]">
                <label name="birthday" className="text-white">
                  Date of birth
                </label>
                <br />
                <input
                  type="date"
                  id="_birthday"
                  name="birthday"
                  required
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mt-6">
                <label name="mail" className="text-white">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  id="_email"
                  name="mail"
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="ml-[4rem]">
                <div className="mt-6">
                  <label name="prof" className="text-white">
                    Professional title
                  </label>
                  <br />
                  <input
                    type="text"
                    id="_ptitle"
                    name="prof"
                    required
                    className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                    placeholder="Professional title"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-6">
                <label name="github" className="text-white">
                  Github
                </label>
                <br />
                <input
                  type="text"
                  id="_github"
                  name="github"
                  required
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="Github"
                />
              </div>
              <div className="mt-6 ml-[4rem]">
                <label name="linkedIn" className="text-white">
                  LinkedIn
                </label>
                <br />
                <input
                  type="text"
                  id="_linked"
                  required
                  // onChange={()=>false}
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="LinkedIn"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mt-6">
                <label name="address" className="text-white">
                  address owner
                </label>
                <br />
                <input
                  type="text"
                  id="_owner"
                  name="address"
                  value={address}
                  // disabled
                  required
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="address owner"
                />
              </div>
              <div className="mt-6 ml-[4rem]">
                <label name="password" className="text-white">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  id="_password"
                  name="password"
                  required
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="address owner"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={addProf}
              id="btn_add"
              className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium hover:bg-orange-btn ease-in duration-100 bg-secondary rounded-[30px]"
            >
              CREATE
            </button>
          </form>
        </div>
        {/* <button type="submit" onClick={showList} id="btn_show" className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-secondary rounded-[30px]">SHOW</button> */}
      </div>
    </>
  )
}
