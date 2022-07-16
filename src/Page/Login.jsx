import React, {useContext, useState} from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import cv from '../assets/Group_27.png';
import logo1 from'../assets/LogoCV.png'; 
import {  useNavigate, Link } from 'react-router-dom';
import { myContract } from './../Api/Const';
import { Context } from '../Context/Context';

const Login = () => {
    var web3 = new Web3(Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    web3.eth.getAccounts().then(console.log);

    const {addr, setAddr, status, setStatus} = useContext(Context)
    const [diaglog, setDialog]= useState(false)
    

    let navigate=useNavigate();
    const HandleClick = () => {
        navigate("/")
    }
    function checkPro(e){
        e.preventDefault()
        setAddr($("#_addressOwner").val())
        myContract.methods
        .checkStudentProfile($("#_addressOwner").val(),$("#_pwd").val())
        .call()
        .then((result) => {
            console.log(parseInt(result));
            if(parseInt(result)==1){
                console.log("Successfully");
                navigate("/");
                setStatus(true)
            } else{
                console.log("Unsuccessfully");
                setDialog(true)
            }
        });
      }
    return (
        <div className="h-[100vh] w-[100vw] flex overflow-hidden">
            <div className="w-[50%] bg-purple">
                <AiOutlineArrowLeft size={"48px"} className="text-white mt-4 ml-4 cursor-pointer" onClick={HandleClick}/>
                <h1 className="text-white text-5xl mt-[1rem] text-left w-[60%] mx-auto">CREATE YOUR CV AND LINK WITH RECRUITERS</h1>
                <div className="w-[30%] h-[50%] bg-secondary top-[28%] left-[7%] absolute rounded-[50%] translate-y-[4rem] overflow-hidden">
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src={cv} className="w-[30%] ml-[15rem] mt-[3rem] object-cover origin-top-left rotate-12" alt="" />
                </div>
            </div>
                <div className="w-[50%] bg-primary">
                    <img className="w-[18%] ml-6 mt-2 cursor-pointer object-cover" src={logo1} alt="logo" onClick={HandleClick} />
                    <h1 className="w-[25%] text-white text-4xl mx-auto mt-6 font-semibold">Welcome to MyCV</h1>
                    <div className="w-[50%] h-[60%] mt-[2rem] mx-auto bg-secondary rounded-[15px]">
                    <h1 className="pt-[20px] text-white text-2xl text-center " >Login</h1>
                    <div className=" pt-6 flex flex-col ">
                        <div className="w-[75%]  mt-6 mx-auto">
                        <label name="email" className="text-white">Your address</label> <br />
                        <input type="text" name="addressOwner" id="_addressOwner" placeholder="Address..." className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"/>
                        </div>
                        <div className="w-[75%] mt-4 mx-auto">
                        <label name="pwd" className="text-white">Password</label> <br />
                        <input type="password" name="pwd" id="_pwd" placeholder="Password..."  className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"/>
                        {diaglog &&<span className="">Invalid!</span>}
                        </div>
                        <button
                            onClick={checkPro} 
                            className="mt-[4rem] mx-auto w-[75%] h-10 text-white bg-primary hover:bg-orange-btn rounded-[30px] ease-in duration-100">Sign in</button>
                        <h3 className=" text-white text-sm mx-auto font-medium mt-4">Not a member?<Link to="/createcv" className="text-primary text-sm font-bold mt-4 hover:text-orange-btn tra"> SIGN UP</Link></h3>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Login;
