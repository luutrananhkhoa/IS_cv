import react, { useCallback, useContext, useEffect, useState } from "react";
import avt from '../assets/avt_illu.jpg';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { BsGithub, BsFillCalendar2DateFill, BsLinkedin,BsFillTelephoneFill, BsFillHouseDoorFill } from 'react-icons/Bs'
import HeaderCompany from "../Components/HeaderCompany";
import { Context } from "../Context/Context";
import { myContract } from './../Api/Const'
import Progressbar from "../Components/Progressbar";
import ModalEvaluate from "../Components/ModalEvaluate";

const EmployeeDetail = () => {
    var web3 = new Web3(Web3.providers.HttpProvider('http://127.0.0.1:7545'))
    web3.eth.getAccounts().then()
    const [openModal, setOpenModal]  = useState(false)
    const { addr, 
        addressTemp,
        profile,
        skills,  
        addrCompany, 
        setProfile,
        listStudent, 
        setListStudent, 
        setSkills,} = useContext(Context)
    const [searchParams] = useSearchParams();
    const  addressStudent =searchParams.get("address")
    const  titleStudent =searchParams.get("title")
  useEffect(()=>{
    myContract.methods
    .getStudentSkill(addressStudent)
    .call()
    .then((result)=> result)
    .then((res)=>{
      setSkills({...res})
      console.log(res)
      return;
    })
    myContract.methods
    .getStudentProfile(addressStudent)
    .call() 
    .then(function (res) {
        setProfile({
            Birthday: res[2],
            Email: res[4],
            Github: res[5],
            Linked: res[6],
            Name: res[1],
            ProfessionalTitle:res[3]
          })
        return;
      })
  },[])
  const HandleClick = () =>{
    setOpenModal(true)
  }
    console.log(searchParams.get("address"))
    console.log(addrCompany)
    console.log(addressTemp)
    return ( 
        <>
            <HeaderCompany />
            {openModal && <ModalEvaluate open={openModal} title={profile?.Name} address={addressStudent} setOpen={setOpenModal}/>}
            <div className="min-h-screen min-w-full bg-primary pb-[8rem]">
                {/* <div className="w-[70%] h-[100%] mx-auto pt-[2rem] pb-[1rem] bg-white rounded-md flex flex-col">
                    <p className="ml-10 text-xl">Lưu Trần Anh Khoa muốn đánh giá quá trình làm việc!</p>
                    <div className="flex justify-end px-10">
                        <button className="w-[4.5rem] h-[2rem] bg-[#ccc] mr-[1rem] rounded-lg">Từ chối</button>
                        <Link to="/evaluate" className="px-8">
                            <button  className="w-[6rem] h-[2rem] bg-[#E42626] text-white rounded-lg">Chấp nhận</button>
                        </Link>
                    </div>
                </div> */}
                <div className="p-[2rem] bg-primary"></div>
                <div className="w-[60%] h-[100%] mx-auto pt-[1rem] bg-white rounded-md flex flex-col pb-[4rem]">
                    <div className="w-full px-10 py-10 flex justify-between">
                        <div className="flex">
                            <img src={avt} alt="Avatar" className="h-[140px] w-[8rem] rounded-md block object-cover"/>
                            <div className="flex flex-col"> 
                                <p className="ml-6 text-[1.8rem] font-semibold">{profile?.Name}</p>
                                <div className="flex ml-6">
                                    <div className="">
                                        <label className="text-xl font-bold mr-4">Position: </label>
                                    </div>
                                    <p className="text-xl">{titleStudent}</p>
                                </div>
                            </div>
                           
                        </div>
                        <button
                            className="h-[45px] w-[140px] bg-orange-btn rounded-[30px]  ml-4 text-white text-xl"
                            onClick={HandleClick}
                        >
                        Evaluate
                        </button>
                    </div>
                    <div className=" px-10 flex justify-between">
                        <div className="w-[60%] bg-gray-bg px-5 py-5 rounded-md">
                                <div className="flex justify-between ">
                                    <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                        <div className="flex items-center">
                                            {/* <IoMdMail size="2rem" className="text-secondary" /> */}
                                            <i className="fa-solid fa-envelope fa-2xl text-secondary"></i>
                                            <p className="ml-2 text-md">Email</p>
                                        </div>
                                        <p className="py-2 w-[100%] break-words">{profile?.Email}</p>
                                    </div>
                                    <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                        <div className="flex items-center">
                                            <BsFillCalendar2DateFill size="2rem" className="text-secondary" />
                                            <p className="ml-2 text-md">Birth Date</p>
                                        </div>
                                        <p className="py-2 w-[100%] break-words">{profile?.Birthday}</p>
                                    </div>
                                </div>
                                <div className="mt-5 flex justify-between">
                                    <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                        <div className="flex items-center">
                                            <BsGithub size="2rem" className="text-secondary" />
                                            <p className="ml-2 text-md">Github</p>
                                        </div>
                                        <p className="py-2 w-[100%] break-words">{profile?.Github}</p>
                                    </div>
                                    <div className="w-[45%] px-4 py-2 rounded-md bg-white">
                                        <div className="flex items-center">
                                        <BsLinkedin size="2rem" className="text-secondary" />
                                            <p className="ml-2 text-md">LinkedIn</p>
                                        </div>
                                        <p className="py-2 w-[100%] break-words">{profile?.Linked}</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default EmployeeDetail;