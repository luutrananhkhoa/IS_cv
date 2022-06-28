import React,{useContext,useEffect, useRef} from 'react';
import Header from '../Components/Header';
import { myContract } from './../Api/Const'
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context/Context'

const Company = () => {
    var web3 = new Web3(Web3.providers.HttpProvider('http://localhost:7545'))
    web3.eth.getAccounts().then()

    const {listCompany, setListCompany, addressTemp, setAddressTemp} = useContext(Context)
    const navigate=useNavigate();
    const ref =useRef()

    function CompanyOnClick(){
        // navigate("/CompanyDetail")
        setAddressTemp($("#_address").val())
        
    }

    console.log(addressTemp) 

    useEffect(()=>{
        myContract.methods.getListDN()
        .call()
        .then((result) => setListCompany(result))
    },[addressTemp])
    console.log(listCompany)

    return ( 
        <>
            <Header/>
            <div className="min-w-full min-h-screen bg-primary">
                <div className="w-[75%] flex flex-col mx-auto">
                    <div className="pt-10">
                        <h1 className="text-6xl text-white font-bold">COMPANY</h1>
                        <p className="mt-2 text-2xl font-light text-white">20 Companies</p>
                    </div>
                    <div className="mt-6 w-[100%] flex">
                        <input type="text" className="py-3 px-6 w-full rounded-l-lg outline-none" placeholder="Company name" />
                        <button className="py-3 px-6 bg-secondary text-white rounded-r-lg">Search</button>
                    </div>
                    <div className="mt-10 ">
                        <div className="flex bg-secondary p-3 rounded-t-lg justify-between text-white text-xl">
                            <p className="w-[40%]">Name</p>
                            <p className="w-[20%]">Focus Area</p>
                            <p className="w-[20%]">National</p>
                        </div>
                         {listCompany[0]?.map((item,index)=>(
                            <div key={item} className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer" onClick={CompanyOnClick}>
                                <p className="w-[40%]">{listCompany?.[1][index]}</p>
                                <p className="w-[20%]">{listCompany?.[3][index]}</p> 
                                <p className="w-[20%]">{listCompany?.[2][index]}</p>
                                <input type="hidden" id="_address"name="_address" value={listCompany?.[0][index]} ref={ref} />
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </> 
    );
}

export default Company;