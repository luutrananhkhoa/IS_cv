import React, { useCallback, useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import avt from '../assets/avt.jpg'
import { IoMdMail } from 'react-icons/Io'
import { BsGithub, BsFillCalendar2DateFill, BsLinkedin } from 'react-icons/Bs'
import Progressbar from '../Components/Progressbar'
import { myContract } from './../Api/Const'
import ReactToPrint from 'react-to-print';
import { Context } from '../Context/Context'

const ref = React.createRef()

const Mycv = () => {
  var web3 = new Web3(Web3.providers.HttpProvider('http://localhost:7545'))
  web3.eth.getAccounts().then()


  const [componentRef, setComponentRef] = useState()
  const [address, setAddress] = useState()
  const {skills, setSkills} = useContext(Context)
  const {addr, setAddr} = useContext(Context)
  const [profile, setProfile] = useState({
    Birthday: "",
    Email: "",
    Github: "",
    Linked: "",
    Name: "",
    ProfessionalTitle: "",
  })

  const setProfileCallback = useCallback((res) =>{
    setProfile({
      Birthday: res[2][0],
      Email: res[5][0],
      Github: res[5][0],
      Linked: res[6][0],
      Name: res[1][0],
      ProfessionalTitle:res[3][0]
    })
  },[addr])

  const getSkillsData =(addr) =>{
    myContract.methods
      .getSkill(addr)
      .call()
      .then((res)=>{
        setSkills({...res})
        console.log(res)
        return;
      })
  }
  console.log(skills)
  console.log(addr)

  useEffect(()=>{
    myContract.methods
    .getSkill(addr)
    .call()
    .then((result)=> result)
    .then((res)=>{
      setSkills({...res})
      console.log(res)
      return;
    })

    myContract.methods
    .getListStudent(addr)
    .call() 
    .then(function (addres) {
        setProfileCallback(addres)
        return;
      })
  },[addr])
  
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-primary pb-[120px]">
        <div className="flex justify-around items-center mb-3">
          <h1 className="font-bold text-2xl text-white ">My CV</h1>
          <ReactToPrint
            content={() => componentRef}
            trigger={() => (
              <button
                className="h-[45px] w-[140px] bg-secondary rounded-[30px] text-white text-xl"
              >
                Save
              </button>
            )}
          />
        </div>
        <div
          id="savecv"
          ref={(response) => setComponentRef(response)}
          className="w-[60%] h-[200vh] mx-auto bg-white flex"
        >
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
                <p id="text-mail" className="pl-2 flex-1 w-[70%] break-words">{profile?.Email}</p>
              </div>
              <div className=" flex items-center">
                <div className="w-[2rem] h-[2rem]">
                  <BsFillCalendar2DateFill size="2rem" className="text-secondary" />
                </div>
                <p id="text-birthday" className="pl-2 flex-1 w-[80%] break-words">{profile?.Birthday}</p>
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
                <p id="text-github" className="pl-2 flex-1 w-[80%] break-words">{profile?.Github}</p>
              </div>
            </div>
            <div className="mt-[4rem] ml-6">
              <h1 className="font-bold text-3xl">SKILLS</h1>
              <hr className="w-[90%] h-[2px] mt-4 border-0 bg-primary" />
              <div className="mt-4 w-[85%]">
                {skills[0]?.map((item,index)=>(
                    <Progressbar key={item} title={item} per={parseInt(skills[1][index]?._hex)} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-[10rem] mt-12 bg-secondary">
              <div className="ml-6 pt-6 text-white">
                <h1 id="text-name" className="text-4xl font-bold">{profile?.Name}</h1>
                <span id="text-proTitle" className="text-[1.3rem] mt-4">{profile?.ProfessionalTitle}</span>
                <hr className="w-[40%] h-[2px] mt-4 border-0 bg-white" />
              </div>
            </div>
            <div className="text-primary">
              <div className="mt-[2rem] ml-4">
                <h1 className=" text-2xl font-bold ">EDUCATION</h1>
                <hr className="w-[90%] h-[3px] border-0 bg-primary" />
                <div>
                  <h1 className="font-bold text-[1.5rem] mt-3 ml-2">
                    University of Information Technology
                  </h1>
                  <h2 className="ml-6 font-semibold text-xl">Information System</h2>
                  <div className="ml-8">
                    <span>08/2019</span> - <span>present</span>
                    <br />
                  </div>
                </div>
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

export default Mycv
