import React,{useCallback, useContext, useEffect, useState} from 'react';
import Header from '../Components/Header';
import avt from '../assets/avt_illu.jpg';
import Progressbar from './../Components/Progressbar';
import { BsGithub, BsFillCalendar2DateFill, BsLinkedin,BsFillTelephoneFill, BsFillHouseDoorFill } from 'react-icons/Bs'
import {  useNavigate } from 'react-router-dom';
import ModalWarning from './../Components/ModalWarning';
import { myContract } from './../Api/Const'
import { Context } from '../Context/Context'

const Profile = () => {
    let navigate=useNavigate();
    const {addr, setAddr, profile, setProfile, skills, setSkills, status, setStatus} = useContext(Context)
    const setProfileCallback = useCallback((res) =>{
        setProfile({
          Birthday: res[2],
          Email: res[4],
          Github: res[5],
          Linked: res[6],
          Name: res[1],
          ProfessionalTitle:res[3]
        })
      },[addr])

    function HandleClick(){
        navigate("/")
        setStatus(false)
    }

    useEffect(()=>{
        myContract.methods
        .getStudentSkill(addr)
        .call()
        .then((result)=> result)
        .then((res)=>{
          setSkills({...res})
          console.log(res)
          return;
        })
    
        myContract.methods
        .getStudentProfile(addr)
        .call() 
        .then(function (addres) {
            setProfileCallback(addres)
            return;
          })
      },[addr])

    const [openModalWarning, setOpenModalWarning] =useState(false);

  return (
    <>
        <Header />
        <div className="min-h-screen min-w-full bg-primary pt-[3rem] pb-[8rem]">
        <ModalWarning openModal={openModalWarning} setOpenModal={setOpenModalWarning}/>
            <div className="w-[60%] h-[100%] mx-auto pt-[4rem] bg-white rounded-md flex flex-col pb-10">
                <div className="w-full px-10 flex justify-between">
                    <div className="flex">
                        <img src={avt} alt="Avatar" className="h-[160px] w-[10rem] rounded-md block object-cover"/>
                        <div className="flex flex-col"> 
                            <h1 className="ml-6 text-[2rem] font-bold">{profile?.Name}</h1>
                            <h1 className="ml-6 text-[1.5rem] text-gray-600">{profile?.ProfessionalTitle}</h1>
                        </div>
                    </div>
                    <div className="">
                        <button
                            className="h-[45px] w-[140px] bg-orange-btn rounded-[30px] text-white text-xl"
                            onClick={HandleClick}
                        >
                            Log out
                        </button>
                    </div>
                </div>
                <div className="mt-10 px-10 flex justify-between">
                    <div className="w-[35%] bg-gray-bg px-10 py-5 rounded-md">
                        <h1 className="text-[1.5rem] font-bold">My Skill</h1>
                        <div className="">
                        {skills[0]?.map((item,index)=>(
                            item && <Progressbar key={item} title={item} per={parseInt(skills[1][index]?._hex)} />
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
                {/* <div className="px-10">
                    <div className="w-[100%]  mt-10 bg-gray-bg px-10 py-5 rounded-md">
                        <h1 className="text-[1.5rem] font-bold">Contact</h1>
                        <div className="flex flex-col ml-5">
                            <h1 className="font-bold text-lg text-secondary">KMS Technology</h1>
                            <div className="flex justify-between">
                                <h1>Position: Frontend Developer</h1>
                                <p>May, 17, 2022</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="w-[10%] p-2 mt-5 rounded-full text-white bg-orange-btn"
                             onClick={()=>{setOpenModalWarning((e)=>!e)}}
                            >End</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
  )
}
export default  Profile;