import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { Web3Context } from '../../Context/Web3ContextProvider'
import Loading from '@component/Loading'
import ModalWarning from '@component/ModalWarning'

export default function Index() {
  let navigate = useNavigate()

  const { contractStudentBusiness, address, setJwtEmployee } = useContext(Web3Context)
  const { setIsLoggedIn } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isUnpaid, setIsUnpaid] = useState(false)

  const [name, setName] = useState()
  const [birthday, setBirthday] = useState()
  const [professional, setProfessional] = useState()
  const [email, setEmail] = useState()
  const [github, setGithub] = useState()
  const [linkedin, setLinkedin] = useState()
  const [password, setPassword] = useState()

  async function addProf() {
    setLoading(true)
    await contractStudentBusiness.methods
      .checkExistStudent(address)
      .call()
      .then(async (success) => {
        if (success === '1') {
          await contractStudentBusiness.methods
            .addStudentProfile(
              address,
              name,
              birthday,
              professional,
              email,
              github,
              linkedin,
              password
            )
            .send({
              from: address,
              gas: 3000000,
            })
            .then((success) => {
              setJwtEmployee(address)
              navigate('/')
              setIsLoggedIn(true)
            })
            .catch((error) => {
              console.log(error)
              if (error.code === 4001) {
                setIsUnpaid(true)
              }
            })
        } else {
          setError(true)
        }
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      })
    setLoading(false)
  }

  return (
    <>
      <ModalWarning state={[isUnpaid, setIsUnpaid]} content="Is Unpaid " />
      <ModalWarning state={[error, setError]} content="Error" />
      <Loading state={loading}></Loading>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-primary">
        <div>
          <h1 className="text-left text-4xl text-white mt-[-20%] font-bold">CREATE MY CV</h1>
          <div >
            <div className="flex">
              <div className="mt-6">
                <label name="fname" className="text-white">
                  Full name
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  id="birthday"
                  name="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
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
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    id="professional"
                    name="professional"
                    value={professional}
                    onChange={(e) => setProfessional(e.target.value)}
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
                  id="github"
                  name="github"
                  required
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
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
                  id="linkedin"
                  name="linkedin"
                  required
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
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
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => {}}
                  required
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="address owner"
                ></input>
              </div>
              <div className="mt-6 ml-[4rem]">
                <label name="password" className="text-white">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="address owner"
                />
              </div>
            </div>
            <button
              onClick={addProf}
              id="btn_add"
              className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium hover:bg-orange-btn ease-in duration-100 bg-secondary rounded-[30px]"
            >
              CREATE
            </button>
          </div>
        </div>
        {/* <button type="submit" onClick={showList} id="btn_show" className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-secondary rounded-[30px]">SHOW</button> */}
      </div>
    </>
  )
}
