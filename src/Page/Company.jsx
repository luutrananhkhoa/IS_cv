import React from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';

const Company = () => {
    let navigate=useNavigate();
    function CompanyOnClick(){
        navigate("/CompanyDetail")
    }
    const companies = [{
        id:1,
        name: 'VNG Corporation',
        location: 'Ho Chi Minh',
        jobs: '10',
        nation:'Vietnam'
    },
    {
        id:2,
        name: 'KMS Technology',
        location: 'Ho Chi Minh',
        jobs: '15',
        nation:'United States'
    }];
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
                            <p className="w-[20%]">Location</p>
                            <p className="w-[20%]">Jobs</p>
                            <p className="w-[20%]">National</p>
                        </div>
                        {companies.map((company) => (
                            <div key={company.id} className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer" onClick={CompanyOnClick}>
                                <p className="w-[40%]">{company?.name}</p>
                                <p className="w-[20%]">{company?.location}</p> 
                                <p className="w-[20%]">{company?.jobs} jobs</p>
                                <p className="w-[20%]">{company?.nation}</p>
                            </div>
                        ))};
                    </div>
                </div>
                
            </div>
        </> 
    );
}

export default Company;