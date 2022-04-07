import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Header from '../Components/Header';
import { contract } from './../Api/Const';

export default function Register() {

//     var web3 = new Web3(Web3.providers.HttpProvider('http://localhost:7545'));

//     web3.eth.getAccounts().then(console.log);
//  var myContract = new web3.eth.Contract(
//        contract,
//         '0x91615914e13D5dF50c8D3e8ED87e2BBcb7fA2222'
//     );
//     myContract.methods
//     .getBalance()
//     .call()
//     .then((result) => console.log(result.toString()));

//     $("#btn_edit").click(function() {
//         myContract.methods.editProfile($("#_owner").val(), $("#_name").val(), $("#_birthday").val(),
//             $("#_ptitle").val(), $("#_email").val(), $("#_github").val(), $("#_linked").val()).send({
//             from: "0xD7fe6F29e189B62A09410A85fb1384616Ee94402",
//             gas: 3000000
//         });
//         console.log($("#amount").val());
//     });

    return (
        <div>
            <Header />
            <div className="min-w-full min-h-screen bg-primary">
                <AiOutlineArrowLeft size={"48px"} color="white" className="ml-[12rem]"  />
                <h1 className=" text-white text-5xl font-bold ml-[19rem] mt-10">Create new account</h1>
                <h3 className=" text-text text-xl font-light ml-[19rem] mt-4">Already a member?<a className=" text-secondary text-xl font-medium  mt-4"> Login</a></h3>
                <form action="" > 
                <div className="flex flex-row">   
                    <div className="ml-[19rem] mt-10">
                        <div className="">
                            <label name="full-name" className=" text-white text-lg  ">Full name</label><br></br>
                            <input name="full-name" type="text" size="30"  className=" mt-2 bg-secondary p-2 rounded-[10px] outline-none"></input><br></br>
                        </div>
                        <div className="mt-6">
                            <label name="password" className=" text-white text-lg mt-5 ">Password</label><br></br>
                            <input name="password" type="text" size="30"  className=" mt-2 bg-secondary p-2 rounded-[10px] outline-none"></input>
                        </div>
                        </div>
                        <div className="ml-[10rem] mt-10">
                        <div>
                            <label name="email" className=" text-white text-lg  ">Email</label><br></br>
                            <input name="email" type="text" size="30"  className=" mt-2 bg-secondary p-2 rounded-[10px] outline-none"></input><br></br>
                        </div>
                        <div className="mt-6">
                            <label name="confirm-password" className=" text-white text-lg  ">Confirm password</label><br></br>
                            <input name="confirm-password" type="text" size="30"  className=" mt-2 bg-secondary p-2 rounded-[10px] outline-none"></input>
                        </div>
                    </div >
                </div>  
                    <button type="submit" className="text-white text-xl mt-[3rem] ml-[19rem] rounded-[50px] font-semibold bg-orange-btn w-[10rem] h-[3rem] ">Create</button>
                </form>
            </div>
        </div>
  )
  
}
