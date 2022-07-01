import React,{useCallback, useContext, useEffect, useState} from 'react';
import avt from './../../assets/avt_illu.jpg';
import Progressbar from './../../Components/Progressbar';
import { BsGithub, BsFillCalendar2DateFill, BsLinkedin,BsFillTelephoneFill, BsFillHouseDoorFill } from 'react-icons/Bs'
// import { IoMdMail } from 'react-icons/Io'
import {  useNavigate } from 'react-router-dom';
import { myContract } from './../../Api/Const'
import { Context } from './../../Context/Context'
import Header from './../../Components/Header';
import HeaderCompany from '../../Components/HeaderCompany';

const CompanyProfile = () => {
    let navigate=useNavigate();
    const { profileBusiness} = useContext(Context)

    var web3 = new Web3(Web3.providers.HttpProvider('http://112.78.4.41:8545'))
    web3.eth.getAccounts().then()


  return (
    <>
        <HeaderCompany />
        <div className="min-h-screen min-w-full bg-primary pt-[4rem] pb-[8rem]">
            <div className="w-[60%] h-[100%] mx-auto pt-[4rem] bg-white rounded-md flex flex-col pb-10">
                <div className="w-full px-10 flex justify-between">
                    <div className="flex">
                        <img src={avt} alt="Avatar" className="h-[160px] w-[10rem] rounded-md block object-cover"/>
                        <div className="flex flex-col"> 
                            <h1 className="ml-6 text-[2rem] font-bold">{profileBusiness?.Name}</h1>
                            <h1 className="ml-6 text-[1.5rem] text-gray-600">{profileBusiness?.Country}</h1>
                        </div>
                    </div>
                    <div className="">
                        <button
                            className="h-[45px] w-[140px] bg-orange-btn rounded-[30px] text-white text-xl"
                        >
                            Edit
                        </button>
                    </div>
                </div>
                <div className="mt-10 px-10 flex justify-between">
                    <div className="w-[50%] bg-gray-bg px-10 py-5 rounded-md">
                        <h1 className="text-[1.5rem] font-bold">My Skill</h1>
                        <div className="">
                        
                        </div>
                    </div>
                    <div className="w-[45%] bg-gray-bg px-5 py-5 rounded-md">
                        <div className="flex justify-between ">
                            <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                <div className="flex items-center">
                                    {/* <IoMdMail size="2rem" className="text-secondary" /> */}
                                    <p className="ml-2 text-md">Email</p>
                                </div>
                                <p className="py-2 w-[100%] break-words"></p>
                            </div>
                            <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                <div className="flex items-center">
                                    <BsFillTelephoneFill size="2rem" className="text-secondary" />
                                    <p className="ml-2 text-md">Phone</p>
                                </div>
                                <p className="py-2 w-[100%] break-words"></p>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-between">
                            <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                <div className="flex items-center">
                                    <BsFillHouseDoorFill size="2rem" className="text-secondary" />
                                    <p className="ml-2 text-md">City</p>
                                </div>
                                <p className="py-2 w-[100%] break-words"></p>
                            </div>
                            <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                <div className="flex items-center">
                                    <BsFillCalendar2DateFill size="2rem" className="text-secondary" />
                                    <p className="ml-2 text-md">Birth Date</p>
                                </div>
                                <p className="py-2 w-[100%] break-words"></p>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-between">
                            <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                <div className="flex items-center">
                                    <BsGithub size="2rem" className="text-secondary" />
                                    <p className="ml-2 text-md">Github</p>
                                </div>
                                <p className="py-2 w-[100%] break-words"></p>
                            </div>
                            <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                <div className="flex items-center">
                                    <BsLinkedin size="2rem" className="text-secondary block " />
                                    <p className="ml-2 text-md">LinkedIn</p>
                                </div>
                                <p className="py-2 w-[100%] break-words"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default CompanyProfile;