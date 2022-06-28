import React, { useContext } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Header from '../Components/Header';
import { myContract } from './../Api/Const';
import { Context } from '../Context/Context';

export default function Register() {

    var web3 = new Web3(Web3.providers.HttpProvider('http://localhost:7545'));
    web3.eth.getAccounts().then(console.log);
    const {addr, setAddr, skills, setSkills} = useContext(Context)

    function addSkill(e){
        e.preventDefault();
        myContract.methods.addStudentSkill(addr, $("#_skill").val(), $("#_level").val())
                .send({
                  from: addr,
                  gas: 3000000
                })
                
        // navigate("/");
    }

    // console.log(skills)
    console.log(addr)
    function showskill(e){
        e.preventDefault()
        myContract.methods
        .getStudentSkill(addr)
        .call()
        .then((result) => console.log(result))
        // .then((res)=>{
        //     // setSkills({...res})
        //     return;
        // });
      }
    return (
        <div>
            <Header />
            <div className="min-w-full min-h-screen bg-primary">
                {/* <AiOutlineArrowLeft size={"48px"} color="white" className="ml-[12rem]"  /> */}
                <h1 className=" text-white text-5xl font-bold ml-[19rem] pt-[4rem]">Add your skills</h1>
                <form action="" > 
                <div className="flex flex-row">   
                    <div className="ml-[19rem] mt-10">
                        <div className="">
                            <label name="full-name" className=" text-white text-lg">Skill:</label><br></br>
                            <input name="full-name" type="text" id="_skill" size="30" className="text-white mt-2 bg-secondary p-3 rounded-[10px] outline-none"></input><br></br>
                        </div>
                        
                        </div>
                        <div className="ml-[8rem] mt-10">
                        <div>
                            <label name="email" className=" text-white text-lg">Level:</label><br></br>
                            <input name="email" type="text" size="30" id="_level" className="text-white mt-2 bg-secondary p-3 rounded-[10px] outline-none"></input><br></br>
                        </div>
                        
                    </div >
                </div>  
                <button type="submit" id="_skill" onClick={addSkill} className="text-white text-xl mt-[3rem] ml-[19rem] rounded-[50px] bg-orange-btn w-[8rem] h-[3rem]">Add</button>
                </form>
                {/* <button type="submit" onClick={showskill} id="btn_showskill" className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-secondary rounded-[30px]">SHOW</button> */}
            </div>
        </div>
  )
  
}
