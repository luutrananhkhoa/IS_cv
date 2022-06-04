import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { BsCheck2Circle } from 'react-icons/Bs';
import { IoMdWarning } from 'react-icons/Io';

export default function ModalWarning(props) {
  const {openModal,setOpenModal}=props;
  let navigate=useNavigate();
    function HandleClick(){
        navigate("/")
    }
  return (
    <>
    {openModal &&
        <> 
        <div className="w-[100vw] h-[100vh] top-0 fixed bg-slate-700 z-[8] opacity-60" onClick={()=>{setOpenModal((e)=>!e)}}>
        </div>
          <div className="w-[30%] h-[60vh] bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-lg">
              <div className="bg-[#ff3333] pt-[10px] h-[40%] rounded-t-lg relative">
                  <strong onClick={()=>{setOpenModal((e)=>!e)}} className="text-4xl text-white absolute top-0 right-2 align-center cursor-pointer alert-del">&times;</strong>
                  <IoMdWarning className="text-[6rem] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"/>
              </div>
              <div className="flex flex-col items-center justify-center mt-[2rem]">
                <h1 className="text-5xl mb-[1rem]">Are you sure</h1>
                <p className="w-[70%] text-center">If you accept, you will cancel my contract. Are you want to cancel this contract?</p>
              </div>
              <div className="flex mt-10 bottom-0">
                <button className="w-[50%] flex justify-center items-center h-[3.5rem] text-xl text-white bg-slate-400"
                onClick={()=>{setOpenModal((e)=>!e)}}
                >Cancel</button>
                <button className="w-[50%] flex justify-center items-center text-xl text-white bg-[#ff3333]">OK</button>
              </div>
              
          </div> 
        </> 
    }
    </>
   
  )
}
