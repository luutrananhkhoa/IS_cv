import React,{useCallback, useContext, useEffect, useState} from 'react';
import avt from './../../assets/avt_illu.jpg';
import {  useNavigate } from 'react-router-dom';
import { myContract } from './../../Api/Const'
import { Context } from './../../Context/Context'
import HeaderCompany from '../../Components/HeaderCompany';

const ManagePost = () => {
    let navigate=useNavigate();
    const { profileBusiness, setProfileBusiness,addrCompany,  posts, setPosts} = useContext(Context)
    useEffect(()=>{
        var web3 = new Web3(Web3.providers.HttpProvider('http://127.0.0.1:7545'))
        web3.eth.getAccounts().then()
        myContract.methods.getRecruit(addrCompany).call().then((res)=>setPosts(res))
    },[])
  return (
    <>
        <HeaderCompany />
        <div className="min-h-screen min-w-full bg-primary pt-[4rem] pb-[8rem]">
            <div className="w-[60%] h-[100%] mx-auto pt-[4rem] bg-white rounded-md flex flex-col pb-10">
                <h1 className=" text-primary text-5xl text-center font-bold">My Post</h1>
            {posts[0]?.map((item,index)=>(
                    item &&
                    <div key={item} className="w-[90%] mx-auto h-[10rem] mt-6 p-6 bg-[#E7E7E7] rounded-md">
                        <p className="font-[500] text-2xl">{posts?.[1][index]}</p>
                        <div className="flex justify-between">
                            <div className="flex justify-between mt-8">
                                {posts?.[0][index]}
                            </div>
                            <button className=" w-[6rem] h-[2.5rem] mt-8  text-[1rem] text-white font-semibd text-center bg-orange-btn rounded-[2rem]"

                            >Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
export default ManagePost;