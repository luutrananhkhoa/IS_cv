import react, { useContext, useEffect } from "react";
import HeaderCompany from './../Components/HeaderCompany';
import { Link, useNavigate } from 'react-router-dom';
import { myContract } from './../Api/Const'
import { Context } from '../Context/Context';   
import StudentApply from "./StudentApply";
import { isBuffer } from "lodash";

const Employee = () => {
    let navigate=useNavigate();
    const {profile ,addressTemp,setAddressTemp,  addrCompany, setAddrCompany, listStudent, 
        jobTitle, setJobTitle, setListStudent, setSkills} = useContext(Context)

    var web3 = new Web3(Web3.providers.HttpProvider('http://127.0.0.1:7545'))
    web3.eth.getAccounts().then()

    const employee = [{
        id:1,
        name: 'Luu Tran Anh Khoa',
        position: 'Frontend Developer',
        start: '17/05/2022',
        status:'Active'
    },
    ];
 
    useEffect(()=>{
         myContract.methods.getListCV(addrCompany).call().
         then((res)=>{
            var array=[]
            for(let i =0;i<res[2].length;i++){
                if(res[2][i]){
                    array.push(res[0][i])
                }
            }
            return array
         }).then(array=>setListStudent(array)).catch(err=>console.log(err))
    },[])   
    // myContract.methods  
    //     .getStudentProfile(listStudent[0][0])
    //     .call() 
    //     .then(res=>setListStudent(res))
    //     .then(setAddressTemp(listStudent[0]))    
    console.log(listStudent)
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
                            {/* <p className="w-[40%]">Position</p> */}
                        </div >
                        {listStudent?.map((item,index)=>(
                            <StudentApply key={item} address={item} title={item}/>              
                        ))}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Employee;