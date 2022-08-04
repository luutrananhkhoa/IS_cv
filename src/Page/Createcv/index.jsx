import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import { Web3Context } from '../../Context/Web3ContextProvider'
import Loading from '@component/Loading'
import ModalWarning from '@component/ModalWarning'
import avt from '@asset/avt_illu.jpg'
import { uploadAvatar } from '@api/employee/profile'

export default function Index() {
  let navigate = useNavigate()

  const { contractStudentBusiness, address, setJwtEmployee } = useContext(Web3Context)
  const { setIsLoggedIn, setExistAccount } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isUnpaid, setIsUnpaid] = useState(false)

  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [professional, setProfessional] = useState()
  const [email, setEmail] = useState()
  const [github, setGithub] = useState()
  const [linkedin, setLinkedin] = useState()
  const [password, setPassword] = useState()
  const [image, setImage] = useState()

  async function addProf() {
    setLoading(true)
    await contractStudentBusiness.methods
      .checkExistStudent(address)
      .call()
      .then(async (success) => {
        if (success === '0') {
          let avatarUrl = ''
          if (image) {
            const fd = new FormData()
            fd.append('address', address)
            fd.append('avatar', image)
            await uploadAvatar(fd)
              .then((success) => {
                avatarUrl = `https://laravel.iscv.ftisu.vn/api/employee/getavatar?address=${address}`
              })
              .catch((error) => console.log(error))
          }

          await contractStudentBusiness.methods
            .addStudentProfile(
              address,
              name,
              phone,
              professional,
              email,
              github,
              linkedin,
              avatarUrl,
              password
            )
            .send({
              from: address,
              //
            })
            .then((success) => {
              setJwtEmployee(address)
              setIsLoggedIn(true)
              setExistAccount(true)
              navigate('/', { replace: true })
            })
            .catch((error) => {
              console.log(error)
              if (error.code === 4001) {
                setIsUnpaid(true)
              }
            })
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
          <div>
            <div className="flex justify-start items-end">
              <img
                className="h-[160px] w-[160px] rounded-md block object-cover"
                alt="img"
                src={image !== undefined ? URL.createObjectURL(image) : avt}
              ></img>
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => setImage(e.target.files[0])}
                className="ml-2 w-[100%] h-[100%] px-4 py-3 text-sm rounded-[8px] bg-white"
              />
            </div>
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
                <label name="phone" className="text-white">
                  Phone
                </label>
                <br />
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-10 w-[20rem] p-4 rounded-[5px] outline-none"
                  placeholder="Phone"
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
