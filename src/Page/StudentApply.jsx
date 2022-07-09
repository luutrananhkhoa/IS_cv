import React, { useCallback, useContext, useEffect } from 'react';
import { myContract } from './../Api/Const'
import { Context } from '../Context/Context';   

const StudentApply = (props) => {
    var web3 = new Web3(Web3.providers.HttpProvider('http://127.0.0.1:7545'))
    web3.eth.getAccounts().then()
    const {address, title} = props;
    const {addr, profile, setProfile, skills, setSkills} = useContext(Context)
    const setProfileCallback = useCallback((res) =>{
        setProfile({
          Birthday: res[2],
          Email: res[4],
          Github: res[5],
          Linked: res[6],
          Name: res[1],
          ProfessionalTitle:res[3]
        })
      },[address])
useEffect(()=>{

    myContract.methods
    .getStudentProfile(address)
    .call() 
    .then(function (address) {
        setProfileCallback(address)
        return;
    })
    })

    const handleClick = () => {
        navigate("/employeedetail")
    }
    return ( 
        <>
            <div className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer"
            onClick={handleClick} >
                <p className="w-[40%]">{profile?.Name}</p>
                {/* <p className="w-[40%]">{title}</p>  */}
            </div>
        
        </>
     );
}
 
export default StudentApply;