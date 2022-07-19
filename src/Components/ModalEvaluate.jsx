import React, { useContext } from 'react'
import Header from './Header';
import avt from '../assets/avt_illu.jpg';
import { useNavigate } from 'react-router-dom';
import { BsCheck2Circle } from 'react-icons/bs';
import { Context } from '../Context/Context';

export default function ModalEvaluate(props) {

  const {open,setOpen, title,address}=props;

  let navigate=useNavigate();
  const { addr, 
    addressTemp,
    profile,
    skills,  
    addrCompany, 
    setProfile,
    listStudent, 
    setListStudent, 
    setSkills,} = useContext(Context)
    function HandleClick(){
      myContract.methods.addStudentSkill(address,addrCompany, $("#_evaluate").val())
                    .send({
                      from: addrCompany,
                      gas: 3000000
                    })
        navigate("/homecompany")
    }
    
  return (
    <>
    {open &&
        <> 
        <div className="w-[100vw] h-[100vh] top-0 fixed bg-slate-700 z-[8] opacity-60" onClick={()=>{setOpen((e)=>!e)}}>
        </div>
          <div className="w-[40%] h-[60vh] bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-lg">
              <div className="p-[10px] h-[40%] rounded-t-lg relative">
                  <strong onClick={()=>{setOpen((e)=>!e)}} className="text-4xl text-black absolute top-0 right-2 align-center cursor-pointer alert-del">&times;</strong>
                  <img src={avt} alt="Avatar"  className="h-[160px] w-[10rem] rounded-md block object-cover absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"/>
              </div>
              <div className="flex justify-center">
                <p className="font-bold text-2xl">{title}</p>
              </div>
              <div className="ml-12 mt-6">
                <p className="font-bold text-xl">Evaluate</p>
                <input type="text" size="40" id="_evaluate" className="text-white mt-2 bg-secondary p-3 rounded-[10px] outline-none"></input>
              </div>
              <div className="flex flex-col items-center justify-center mt-[0.5rem]">
                <button className="w-[10rem] mt-8 px-6 py-3 text-white bg-orange-btn rounded-[2rem]" onClick={HandleClick}>OK</button>
              </div>
          </div> 
        </> 
    }
    </>
   
  )
}
