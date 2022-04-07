import React from 'react';
import Header from '../Components/Header';
import { contract } from './../Api/Const';

export default function Createcv() {

      var web3 = new Web3(Web3.providers.HttpProvider('http://localhost:7545'));

    web3.eth.getAccounts().then(console.log);
 var myContract = new web3.eth.Contract(
       contract,
        '0x1BE446b55b940a9ce9798E5FfD68A061EB026ee9'
    );
    myContract.methods
    .getBalance()
    .call()
    .then((result) => console.log(result.toString()));

    function addProf() {
        myContract.methods.addProfile($("#_owner").val(), $("#_name").val(), $("#_birthday").val(),
            $("#_ptitle").val(), $("#_email").val(), $("#_github").val(), $("#_linked").val()).send({
            from: "0xD7fe6F29e189B62A09410A85fb1384616Ee94402",
            gas: 3000000
        });
    };

  return (
      <>
          <Header />
          <div className="w-full min-h-screen bg-primary ">
            <h1 className="text-left ml-[200px] text-4xl text-white font-bold pt-[3rem]">CREATE MY CV</h1>
            <form action="#" className="ml-[200px] mt-[2rem]">
              <div className="flex"> 
                  <div className="mt-6">
                    <label name="fname" className="text-white">Full name</label><br/>
                    <input type="text" id="_name" name="fname" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Full name"/>
                  </div>
                  <div className="mt-6 ml-[4rem]">
                    <label name="birthday" className="text-white">Date of birth</label><br/>
                    <input type="date" id="_birthday" name="birthday" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Email"/>
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
                  <input type="text" id="_ptitle" name="prof" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Professional title"/>
                </div>
                </div>
              </div>
              <div className="flex">
                <div className="mt-6" >
                  <label name="github" className="text-white">Github</label><br/>
                  <input type="text" id="_github" name="github" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Github"/>
                </div>
                <div className="mt-6 ml-[4rem]">
                  <label name="linkedIn" className="text-white">LinkedIn</label><br/>
                  <input type="text" id="_linked" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="LinkedIn"/>
                </div>
              </div>
              <div className="flex">
                <div className="mt-6" >
                  <label name="address" className="text-white">Address owner</label><br/>
                  <input type="text" id="_owner" name="address" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Address owner"/>
                </div>
              </div>
              {/* <button type="submit" id="btn_add" onClick={addProf} className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-secondary rounded-[30px]">CREATE</button> */}
            </form>
            <button type="submit" id="btn_add" onClick={addProf} className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-secondary rounded-[30px]">CREATE</button>
          </div>
    </>
  )
}
