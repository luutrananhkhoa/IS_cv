import React,{useCallback, useContext, useEffect, useState} from 'react';
import avt from './../../assets/avt_illu.jpg';
import Progressbar from './../../Components/Progressbar';
import { BsGithub, BsLinkedin, BsFillHouseDoorFill } from 'react-icons/Bs'
import {  useNavigate } from 'react-router-dom';
import { myContract } from './../../Api/Const'
import { Context } from './../../Context/Context'
import Header from './../../Components/Header';
import HeaderCompany from '../../Components/HeaderCompany';

const CompanyProfile = () => {
    let navigate=useNavigate();
    const { profileBusiness, setProfileBusiness,addrCompany} = useContext(Context)

    var web3 = new Web3(Web3.providers.HttpProvider('http://127.0.0.1:7545'))
    web3.eth.getAccounts().then()

    const setProfileBusinessCallback = useCallback((res) =>{
        setProfileBusiness({
            AddressCompany: res?.[0],
            Name: res?.[1],
            Country: res?.[2],
            Business: res?.[3],
            Linked: res?.[4],
            Website: res?.[5],
            Facebook:res?.[6],
        })
      },[addrCompany])

    useEffect(()=>{
        myContract.methods
        .getBusinessProfile(addrCompany)
        .call()
        .then((result) => setProfileBusinessCallback(result))
    },[])
    console.log(profileBusiness)
  return (
    <>
        <HeaderCompany />
        <div className="min-h-screen min-w-full bg-primary pt-[4rem] pb-[8rem]">
            <div className="w-[60%] h-[100%] mx-auto pt-[4rem] bg-white rounded-md flex flex-col pb-10">
                <div className="w-full px-10 flex justify-between">
                    <div className="flex">
                        <img src={avt} alt="Avatar" className="h-[160px] w-[10rem] rounded-md block object-cover"/>
                        <div className="flex flex-col"> 
                            <h1 className="ml-6 text-[2rem] font-bold">{profileBusiness.Name}</h1>
                            <p className="ml-6 text-[1rem] text-gray-600">{profileBusiness?.Country}</p>
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
                {/* <div className="w-[80%] mx-auto bg-gray-bg px-5 py-5 rounded-md">
                    <div className="flex justify-between ">
                        <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                            <div className="flex items-center">
                                <p className="ml-2 text-md">Business</p>
                            </div>
                            <p className="py-2 w-[100%] break-words">{profileBusiness.Business}</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
  )
}
export default CompanyProfile;