import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import cv from '../assets/Group_27.png';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
 let navigate=useNavigate();
    function HandleClick(){
        navigate("/")
    }
    return (
        <div className="min-h-screen min-w-full flex overflow-hidden">
            <div className="w-[100vh] bg-purple">
                <AiOutlineArrowLeft size={"48px"} className="text-white mt-4 ml-4 cursor-pointer" onClick={HandleClick}/>
                <h1 className="text-white text-5xl mt-[1rem] text-left w-[60%] mx-auto">CREATE YOUR CV AND LINK WITH RECRUITERS</h1>
                <div className="w-[25rem] h-[25rem] bg-secondary top-[28%] left-[7%] absolute rounded-[50%] translate-y-[4rem] overflow-hidden">
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src={cv} className="w-[30%] ml-[15rem] mt-[3rem] object-cover origin-top-left rotate-12" alt="" />
                </div>
            </div>
                <div className="w-[100vh] bg-primary">
                    <h1 className="text-3xl text-white mt-4 ml-4">LOGO</h1>
                    <h1 className="w-[25%] text-white text-4xl mx-auto mt-6 font-semibold">Welcome to MyCV</h1>
                    <div className="w-[50%] h-[60%] mt-[2rem] mx-auto bg-secondary rounded-[15px]">
                    <h1 className="pt-[20px] text-white text-2xl text-center " >Login</h1>
                    <div className=" pt-6 flex flex-col ">
                        <div className="w-[75%]  mt-6 mx-auto">
                        <label name="email" className="text-white">Your e-mail</label> <br />
                        <input type="text" name="email" placeholder="ltak@gmail.com" className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"/>
                        </div>
                        <div className="w-[75%] mt-4 mx-auto">
                        <label name="pwd" className="text-white">Password</label> <br />
                        <input type="text" name="pwd" placeholder="123456"  className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"/>
                        </div>
                        <button className="mt-[4rem] mx-auto w-[75%] h-10 text-white bg-primary rounded-[30px]">Sign in</button>
                        <h3 className=" text-white text-sm mx-auto font-medium mt-4">Already a member?<a className=" text-primary text-sm font-bold  mt-4"> Login</a></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
