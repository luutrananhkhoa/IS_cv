import React,{useCallback, useContext, useEffect, useState} from 'react';
import avt from './../../assets/avt_illu.jpg';
import {  useNavigate } from 'react-router-dom';
import { myContract } from './../../Api/Const'
import { Context } from './../../Context/Context'
import HeaderCompany from '../../Components/HeaderCompany';

const ManagePost = () => {
    let navigate=useNavigate();
    const { profileBusiness, setProfileBusiness,addrCompany} = useContext(Context)

    var web3 = new Web3(Web3.providers.HttpProvider('http://127.0.0.1:7545'))
    web3.eth.getAccounts().then()

    
  return (
    <>
        <HeaderCompany />
        <div className="min-h-screen min-w-full bg-primary pt-[4rem] pb-[8rem]">
            <div className="w-[60%] h-[100%] mx-auto pt-[4rem] bg-white rounded-md flex flex-col pb-10">
                <div className="w-[80%] mx-auto h-[10rem] p-6 bg-[#E7E7E7] rounded-md">
                    <p className="font-[500] text-2xl">Mobile Developer (iOS/MacOS)</p>
                    <div className="flex justify-between">
                        <div className="flex justify-between mt-8">
                            <div className="py-2 px-6 mx-2 bg-secondary rounded-lg text-white">IOS</div>
                            <div className="py-2 px-6 mx-2 bg-secondary rounded-lg text-white">Swift</div>
                            <div className="py-2 px-6 mx-2 bg-secondary rounded-lg text-white">Objective C</div>
                        </div>
                        {/* <button className=" w-[6rem] h-[2.5rem] mt-8  text-[1rem] text-white font-semibold text-center bg-orange-btn rounded-[2rem]"
                        >Apply</button> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default ManagePost;