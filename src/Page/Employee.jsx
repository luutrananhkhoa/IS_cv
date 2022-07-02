import react, { useContext, useEffect } from "react";
import HeaderCompany from './../Components/HeaderCompany';
import { Link, useNavigate } from 'react-router-dom';
import { myContract } from './../Api/Const'
import { Context } from '../Context/Context';   

const Employee = () => {
    let navigate=useNavigate();
    const { addressTemp,setAddressTemp,  addrCompany, setAddrCompany, listStudent, setListStudent, setSkills,} = useContext(Context)

    var web3 = new Web3(Web3.providers.HttpProvider('http://112.78.4.41:8545'))
    web3.eth.getAccounts().then()

    const employee = [{
        id:1,
        name: 'Luu Tran Anh Khoa',
        position: 'Frontend Developer',
        start: '17/05/2022',
        status:'Active'
    },
    ];
    const handleClick = () => {
        navigate("/employeedetail")
    }
    
    useEffect(()=>{
         myContract.methods.getListCV("0x3fA85d1A2F6b913656883c85Acd0CCDCA0f1c36e").call().then(res=>setListStudent(res)).catch(err=>console.log(err))
         setAddrCompany("0x3fA85d1A2F6b913656883c85Acd0CCDCA0f1c36e")
       

    },[])
    myContract.methods  
        .getStudentProfile(listStudent[0][0])
        .call() 
        .then(res=>setListStudent(res))
        .then(setAddressTemp(listStudent[0]))
    console.log(addressTemp)

    console.log(addrCompany)
    return ( 
        <>
            <HeaderCompany />
            <div className="min-h-screen min-w-full bg-primary pb-[8rem]">
                <h1 className="text-center text-5xl pt-10 font-semibold text-white">EMPLOYEE</h1>
                <div className="w-[70%] h-[100%] mx-auto pt-[4rem] flex flex-col justify-center pb-[4rem]">
                    <div className="mt-6 w-[80%] flex justify-center mx-auto">
                        <input type="text" className="py-3 px-6 w-full rounded-l-lg outline-none" placeholder="Employee name" />
                        <button className="py-3 px-6 bg-secondary text-white rounded-r-lg">Search</button>
                    </div>
                    <div className="w-[80%] mx-auto mt-8">
                        <div className="flex bg-secondary p-3 rounded-t-lg justify-between text-white text-xl">
                            <p className="w-[40%]">Name</p>
                            <p className="w-[20%]">Position</p>
                            <p className="w-[20%]">Start Date</p>
                            <p className="w-[20%] text-center">Status</p>
                        </div >
                            <div className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer"
                            onClick={handleClick} >
                                <p className="w-[40%]">{listStudent?.[1]}</p>
                                {/* <p className="w-[20%]">{listStudent?.position}</p> 
                                <p className="w-[20%]">{listStudent?.start}</p>
                                <p className="w-[20%] text-center">{listStudent?.status}</p> */}
                            </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Employee;