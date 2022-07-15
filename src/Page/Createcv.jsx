import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../Components/Header';
import { myContract } from './../Api/Const';
import { Context } from '../Context/Context';
import logo1 from'../assets/LogoCV.png'; 

export default function Createcv() {
    let navigate=useNavigate();
    const [checkPofile, setCheckPofile] = useState(false)
    const {addr, setAddr, status, setStatus} = useContext(Context)

    var web3 = new Web3(Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    web3.eth.getAccounts().then(console.log);

    const checkStudent= async()=>{
      await myContract.methods.checkStudentProfile($("#_owner").val(),$("#_password").val()).call().then(res=>setTempCheck(parseInt(res._hex)))
    }

    function addProf(e) {
      e.preventDefault()
      myContract.methods
      .checkStudentProfile($("#_owner").val(),$("#_password").val())
      .call()
      .then((result) => {
          console.log(parseInt(result));
          if(parseInt(result)==0){
              console.log("Successfully");
              setAddr($("#_owner").val())
              myContract.methods.addStudentProfile($("#_owner").val(), $("#_name").val(), $("#_birthday").val(), $("#_ptitle").val(), $("#_email").val(), $("#_github").val(), $("#_linked").val(),$("#_password").val())
                      .send({
                        from: $("#_owner").val(),
                        gas: 3000000
                      });
              navigate("/");
              setStatus(true)
          } else{
              console.log("Unsuccessfully");
              alert("Tài khoản đã được đăng ký!")
          }})
    };

    
    function showList(e){
      myContract.methods
      .getListStudent(addr)
      .call()
      .then((result) => console.log(result));
      e.preventDefault()
    }
    console.log(addr)   
  return (
      <>
          <Header />
          <div className="w-full min-h-screen flex flex-col justify-center items-center bg-primary">
            <div>
              <h1 className="text-left text-4xl text-white mt-[-20%] font-bold">CREATE MY CV</h1>
              <form action="#" className="">
                <div className="flex"> 
                    <div className="mt-6">
                      <label name="fname" className="text-white">Full name</label><br/>
                      <input type="text" id="_name" name="fname" required className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Full name"/>
                    </div>
                    <div className="mt-6 ml-[4rem]">
                      <label name="birthday" className="text-white">Date of birth</label><br/>
                      <input type="date" id="_birthday" name="birthday" required className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Email"/>
                    </div>
                </div>
                <div className="flex">
                  <div className="mt-6" >
                    <label name="mail" className="text-white">Email</label><br/>
                    <input type="email" id="_email" name="mail" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Email"/>
                  </div>
                  <div className="ml-[4rem]">
                  <div className="mt-6" >
                    <label name="prof" className="text-white">Professional title</label><br/>
                    <input type="text" id="_ptitle" name="prof" required className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Professional title"/>
                  </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="mt-6" >
                    <label name="github" className="text-white">Github</label><br/>
                    <input type="text" id="_github" name="github" required className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Github"/>
                  </div>
                  <div className="mt-6 ml-[4rem]">
                    <label name="linkedIn" className="text-white">LinkedIn</label><br/>
                    <input type="text" id="_linked" required className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="LinkedIn"/>
                  </div>
                </div>
                <div className="flex">
                  <div className="mt-6" >
                    <label name="address" className="text-white">Address owner</label><br/>
                    <input type="text" id="_owner" name="address" required className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Address owner"/>
                  </div>
                  <div className="mt-6 ml-[4rem]" >
                    <label name="password" className="text-white">Password</label><br/>
                    <input type="password" id="_password" name="password" required className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Address owner"/>
                  </div>
                </div>
                <button type="submit" onClick={addProf} id="btn_add" className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium hover:bg-orange-btn ease-in duration-100 bg-secondary rounded-[30px]">CREATE</button>
              </form>
            </div>
            {/* <button type="submit" onClick={showList} id="btn_show" className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-secondary rounded-[30px]">SHOW</button> */}
          </div>
    </>
  )
}
