import React, {useContext, useState} from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import cv from '../assets/Group_27.png';
import logo1 from'../assets/LogoCV.png'; 
import {  useNavigate, Link } from 'react-router-dom';
import { myContract } from '../Api/Const';
import { Context } from '../Context/Context';

const LoginComany = () => {
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
        .checkBusinessProfile($("#_addressBusiness").val(),$("#_pwdBusiness").val())
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
        <div className="h-[100vh] w-[100vw] bg-primary flex overflow-hidden justify-center">
                <div className="w-[50%] flex flex-col mt-12 bg-primary">
                    <img className="w-[20%] mx-auto cursor-pointer object-cover" src={logo1} alt="logo" onClick={HandleClick} />
                    <div className="w-[50%] h-[60%] mt-[2rem] mx-auto bg-secondary rounded-[15px]">
                    <h1 className="pt-[20px] text-white text-2xl text-center " >Login for Company</h1>
                    <div className=" pt-6 flex flex-col ">
                        <div className="w-[75%]  mt-6 mx-auto">
                        <label name="email" className="text-white">Your address</label> <br />
                        <input type="text" name="addressOwner" id="_addressBusiness" placeholder="0x00000" className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"/>
                        </div>
                        <div className="w-[75%] mt-4 mx-auto">
                        <label name="pwd" className="text-white">Password</label> <br />
                        <input type="text" name="pwd" id="_pwdBusiness" placeholder="123456"  className="w-full h-[2.5rem] p-4 text-sm rounded-[8px]"/>
                        {diaglog &&<span className="">Invalid!</span>}
                        </div>
                        <button
                            onClick={checkPro} 
                            className="mt-[4rem] mx-auto w-[75%] h-10 text-white bg-primary hover:bg-orange-btn ease-in duration-100 rounded-[30px]">Sign in</button>
                        <h3 className=" text-white text-sm mx-auto font-medium mt-4">Not a member?<Link to="/companymanage" className="text-primary text-sm font-bold mt-4"> SIGN UP</Link></h3>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default LoginComany;
