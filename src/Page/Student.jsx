import React from 'react';
import Header from '../Components/Header';


const Student = () => {
    return ( 
        <>
            <Header/>
            <div className="min-w-full min-h-screen bg-primary">
                <div className="w-[75%] flex mx-auto">
                    <h1 className=" pt-10 text-6xl text-white font-bold">STUDENT</h1>
                </div>
            </div>
        </>
    );
}

export default Student;