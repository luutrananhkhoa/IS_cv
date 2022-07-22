import React, { useCallback, useContext, useEffect, useState, memo, useRef } from 'react'
import avt from '@asset/avt_illu.jpg'
import { IoMdMail } from 'react-icons/io'
import { BsGithub, BsFillCalendar2DateFill, BsLinkedin } from 'react-icons/bs'
import Progressbar from '../../Component/Progressbar'
import ReactToPrint from 'react-to-print'
import _ from 'lodash'
import { Web3Context } from '../../Context/Web3ContextProvider'
import { useSearchParams } from 'react-router-dom'
import ModalWarning from '@/Component/ModalWarning'
import Web3 from 'web3'

const Index = () => {
  const componentRef = useRef()
  const [profile, setProfile] = useState()
  const [skills, setSkills] = useState()
  const [addressError, setAddressError] = useState()
  const { contractStudentBusiness } = useContext(Web3Context)

  const [searchParams] = useSearchParams()
  const addressEmployee = searchParams.get('address')

  useEffect(() => {
    ;(async () => {
      if (contractStudentBusiness) {
        if (!new Web3().utils.isAddress(addressEmployee)) {
          setAddressError(true)
          return
        }
        contractStudentBusiness.methods
          .getStudentSkill(addressEmployee)
          .call()
          .then((success) => {
            let temp = { 0: [], 1: [] }
            _.forEach(success[0], (value, index) => {
              if (success[0][index] !== '') {
                temp[0].push(success[0][index])
                temp[1].push(success[1][index])
              }
            })
            setSkills(temp)
          })
          .catch((error) => {
            console.error(error)
          })

        contractStudentBusiness.methods
          .getStudentProfile(addressEmployee)
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
          .catch((error) => {
            console.error(error)
          })
      }
    })()
  }, [contractStudentBusiness])

  return (
    <>
      {console.log(skills)}
      <ModalWarning
        state={[addressError, setAddressError]}
        content="Address Error"
        // action={() => navigation('/')}
      />
      <div className="w-full min-h-screen bg-primary pb-[120px]">
        <div className="flex justify-around items-center mb-3">
          <h1 className="font-bold text-2xl text-white ">My CV</h1>
          <div>
            <ReactToPrint
              content={() => componentRef.current}
              trigger={() => (
                <button className="py-2 w-[140px] bg-secondary rounded-[30px] text-white text-xl">
                  Save
                </button>
              )}
            />
          </div>
        </div>
        <div id="savecv" ref={componentRef} className="w-[60%] h-[200vh] mx-auto bg-white flex">
          <div className="w-[30%] flex flex-col">
            <img
              src={avt}
              className="h-[160px] w-[160px] mx-auto mt-12 rounded-[50%] block object-cover"
            />
            <div className="p-2 ml-4 mt-6 flex flex-col gap-4">
              <div className="flex items-center">
                <div className="w-[2rem] h-[2rem]">
                  <IoMdMail size="2rem" className="text-secondary" />
                </div>
                <p id="text-mail" className="pl-2 flex-1 w-[70%] break-words">
                  {profile?.Email}
                </p>
              </div>
              <div className=" flex items-center">
                <div className="w-[2rem] h-[2rem]">
                  <BsFillCalendar2DateFill size="2rem" className="text-secondary" />
                </div>
                <p id="text-birthday" className="pl-2 flex-1 w-[80%] break-words">
                  {profile?.Birthday}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[2rem] h-[2rem]">
                  <BsLinkedin size="2rem" className="text-secondary block " />
                </div>
                <p id="text-linkedln" className="pl-2 flex-1 w-[80%] break-words">
                  {profile?.Linked}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[2rem] h-[2rem]">
                  <BsGithub size="2rem" className="text-secondary" />
                </div>
                <p id="text-github" className="pl-2 flex-1 w-[80%] break-words">
                  {profile?.Github}
                </p>
              </div>
            </div>
            <div className="mt-[4rem] ml-6">
              <h1 className="font-bold text-3xl">SKILLS</h1>
              <hr className="w-[90%] h-[2px] mt-4 border-0 bg-primary" />
              <div className="mt-4 w-[85%]">
                {skills &&
                  skills[0]?.map((item, index) => {
                    return <Progressbar key={item} title={item} percent={skills[1][index]} />
                  })}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-[10rem] mt-12 bg-secondary">
              <div className="ml-6 pt-6 text-white">
                <h1 id="text-name" className="text-4xl font-bold">
                  {profile?.Name}
                </h1>
                <span id="text-proTitle" className="text-[1.3rem] mt-4">
                  {profile?.ProfessionalTitle}
                </span>
                <hr className="w-[40%] h-[2px] mt-4 border-0 bg-white" />
              </div>
            </div>
            <div className="text-primary">
              <div className="mt-[2rem] ml-4">
                <h1 className=" text-2xl font-bold ">EDUCATION</h1>
                <hr className="w-[90%] h-[3px] border-0 bg-primary" />
                {/* <div>
                  <h1 className="font-bold text-[1.5rem] mt-3 ml-2">
                    University of Information Technology
                  </h1>
                  <h2 className="ml-6 font-semibold text-xl">Information System</h2>
                  <div className="ml-8">
                    <span>08/2019</span> - <span>present</span>
                    <br />
                  </div>
                </div> */}
              </div>
              <div className="mt-[3rem] ml-4 ">
                <h1 className="text-2xl font-bold text-primary ">WORK EXPERIENCE</h1>
                <hr className="w-[90%] h-[3px] border-0 bg-primary" />
              </div>
              <div className="mt-[3rem] ml-4 ">
                <h1 className="text-2xl font-bold text-primary ">CERTIFICATES</h1>
                <hr className="w-[90%] h-[3px] border-0 bg-primary" />
              </div>
              <div className="mt-[3rem] ml-4 ">
                <h1 className="text-2xl font-bold text-primary ">PERSONAL PROJECTS</h1>
                <hr className="w-[90%] h-[3px] border-0 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Index)
