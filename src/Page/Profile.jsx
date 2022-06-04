import React,{useState} from 'react';
import Header from '../Components/Header';
import avt from '../assets/avt.jpg';
import Progressbar from './../Components/Progressbar';
import { BsGithub, BsFillCalendar2DateFill, BsLinkedin,BsFillTelephoneFill, BsFillHouseDoorFill } from 'react-icons/Bs'
import { IoMdMail } from 'react-icons/Io'
import {  useNavigate } from 'react-router-dom';
import ModalWarning from './../Components/ModalWarning';

const Profile = () => {
    let navigate=useNavigate();
    function HandleClick(){
        navigate("/mycv")
    }
    const [openModalWarning, setOpenModalWarning] =useState(false);
    const skills = [
        {
          title: 'HTML',
          per: '70',
        },
        {
            title: 'CSS',
            per: '80',
        },
        {
            title: 'Javascript',
            per: '75',
        },
        {
            title: 'Python',
            per: '60',
        }
      ]
  return (
    <>
        <Header />
        <div className="min-h-screen min-w-full bg-primary pb-[8rem]">
        <ModalWarning openModal={openModalWarning} setOpenModal={setOpenModalWarning}/>
            <div className="w-[80%] h-[100%] mx-auto pt-[4rem] bg-white rounded-md flex flex-col pb-10">
                <div className="w-full px-10 flex justify-between">
                    <div className="flex">
                        <img src={avt} alt="Avatar" className="h-[160px] w-[10rem] rounded-md block object-cover"/>
                        <div className="flex flex-col"> 
                            <h1 className="ml-6 text-[2rem] font-bold">Luu Tran Anh Khoa</h1>
                            <h1 className="ml-6 text-[1.5rem] text-gray-600">Junior</h1>
                        </div>
                    </div>
                    <div className="">
                        <button
                            className="h-[45px] w-[140px] bg-orange-btn rounded-[30px] text-white text-xl"
                            onClick={HandleClick}
                        >
                            Edit
                        </button>
                    </div>
                </div>
                <div className="mt-10 px-10 flex justify-between">
                    <div className="w-[50%] bg-gray-bg px-10 py-5 rounded-md">
                        <h1 className="text-[1.5rem] font-bold">My Skill</h1>
                        <div className="">
                            {skills.map((skill, key)=>{
                                    return (
                                        <Progressbar  title={skills[key]?.title} per={skills[key]?.per}/>
                                    )
                            })}
                        </div>
                    </div>
                    <div className="w-[45%] bg-gray-bg px-5 py-5 rounded-md">
                            <div className="flex justify-between ">
                                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                    <div className="flex items-center">
                                        <IoMdMail size="2rem" className="text-secondary" />
                                        <p className="ml-2 text-md">Email</p>
                                    </div>
                                    <p className="py-2 w-[100%] break-words">ltakhoa1902@gmail.com</p>
                                </div>
                                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                    <div className="flex items-center">
                                        <BsFillTelephoneFill size="2rem" className="text-secondary" />
                                        <p className="ml-2 text-md">Phone</p>
                                    </div>
                                    <p className="py-2 w-[100%] break-words">0847232292</p>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between">
                                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                    <div className="flex items-center">
                                        <BsFillHouseDoorFill size="2rem" className="text-secondary" />
                                        <p className="ml-2 text-md">City</p>
                                    </div>
                                    <p className="py-2 w-[100%] break-words">HCM City</p>
                                </div>
                                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                    <div className="flex items-center">
                                        <BsFillCalendar2DateFill size="2rem" className="text-secondary" />
                                        <p className="ml-2 text-md">Birth Date</p>
                                    </div>
                                    <p className="py-2 w-[100%] break-words">19/02/2001</p>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between">
                                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                    <div className="flex items-center">
                                        <BsGithub size="2rem" className="text-secondary" />
                                        <p className="ml-2 text-md">Github</p>
                                    </div>
                                    <p className="py-2 w-[100%] break-words">https://github.com/luutrananhkhoa</p>
                                </div>
                                <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                    <div className="flex items-center">
                                     <BsLinkedin size="2rem" className="text-secondary block " />
                                        <p className="ml-2 text-md">LinkedIn</p>
                                    </div>
                                    <p className="py-2 w-[100%] break-words">https://www.linkedin.com/in/luu-tran-anh-khoa-07914822a/</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="px-10">
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
                </div>
            </div>
        </div>
    </>
  )
}
export default  Profile;