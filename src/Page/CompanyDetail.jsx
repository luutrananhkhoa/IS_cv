import React, { useCallback, useEffect,useContext } from 'react'
import Header from './../Components/Header';
import { BsFacebook, BsLinkedin, BsCheck2Circle } from 'react-icons/Bs';
import { ImEarth } from 'react-icons/Im';
import { useState } from 'react';
import { myContract } from './../Api/Const'
import ModalSuccess from '../Components/ModalSuccess';
import { Context } from '../Context/Context';

export default function CompanyDetail() {
    const {addr, addressTemp,  profileBusiness} = useContext(Context)

    var web3 = new Web3(Web3.providers.HttpProvider('http://112.78.4.41:8545'))
    web3.eth.getAccounts().then()

    const handleApply =()=>{
        console.log("Bat dau")
        const asyncFunc = async ()=>{
            console.log("A")
            myContract.methods.sendCV(addr,addressTemp).send({
                from: addr,
                gas: 3000000
              })
            console.log("B")
        }
        asyncFunc()
        console.log("Ket thúc")
    }
    const show =()=>{
        myContract.methods.getListCV(addressTemp).call().then(res=>console.log(res)).catch(err=>console.log(err))
    }
    console.log(addr)
    console.log(addressTemp)
  return (
    <>
        <Header />
        <div className="min-w-full min-h-screen bg-primary pt-4 pb-10 relative">
        {/* <ModalSuccess open={openModal} setOpen={setOpenModal}/> */}
            <div className="w-[70%] h-[70%] mx-auto p-[2rem] mt-10 bg-white rounded-[1rem]">
                <div className="flex">
                    {/* <img src="data:image/png;base64,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" alt="" 
                        className="w-[6rem] h-[6rem] object-cover"/> */}
                    <div className="mt-3 ml-[2rem]">
                        <h1 className="text-5xl font-bold mb-1">{profileBusiness?.Name}</h1>
                        <p className="ml-4">{profileBusiness?.Country}</p>
                    </div>
                </div>
                <p className="mt-10 text-2xl ml-6 font-bold">Jobs</p>
                <div className="mt-6 w-[70%] ml-10">
                {/* /job */}
                    <div className="w-full h-[10rem] mt-6 p-6 bg-[#E7E7E7] rounded-md">
                        <p className="font-[500] text-2xl">Mobile Developer (iOS/MacOS)</p>
                        <div className="flex justify-between">
                            <div className="flex justify-between mt-8">
                                <div className="py-2 px-6 mx-2 bg-secondary rounded-lg text-white">IOS</div>
                                <div className="py-2 px-6 mx-2 bg-secondary rounded-lg text-white">Swift</div>
                                <div className="py-2 px-6 mx-2 bg-secondary rounded-lg text-white">Objective C</div>
                            </div>
                            <button className=" w-[6rem] h-[2.5rem] mt-8  text-[1rem] text-white font-semibold text-center bg-orange-btn rounded-[2rem]"
                                onClick={handleApply}
                            >Apply</button>
                        </div>
                    </div>
                    {/* job */}
                    <div className="w-full h-[10rem] mt-6 p-6 bg-[#E7E7E7] rounded-md">
                        <p className="font-[500] text-2xl">Mobile Developer (iOS/MacOS)</p>
                        <div className="flex justify-between">
                            <div className="flex justify-between mt-8">
                                <div className="py-2 px-6 mx-2 bg-secondary rounded-lg text-white">IOS</div>
                                <div className="py-2 px-6 mx-2 bg-secondary rounded-lg text-white">Swift</div>
                                <div className="py-2 px-6 mx-2 bg-secondary rounded-lg text-white">Objective C</div>
                            </div>
                            <button className=" w-[6rem] h-[2.5rem] mt-8  text-[1rem] text-white font-semibold text-center bg-orange-btn rounded-[2rem]"
                                onClick={show}
                            >Apply</button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 ml-6">
                    <h1 className="text-2xl font-bold">Contact</h1>
                    <div className="mt-2 ml-2 flex">
                        <BsLinkedin size="1.5rem" className="mr-4"/>
                        <BsFacebook size="1.5rem" className="mr-4"/>
                        <ImEarth size="1.5rem"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
