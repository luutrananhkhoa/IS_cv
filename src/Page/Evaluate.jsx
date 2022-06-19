import React from 'react';
import Header from '../Components/Header';
import avt from '../assets/avt.jpg'
import HeaderCompany from './../Components/HeaderCompany';

const Evaluate = () => {
    return (  
        <>
            <HeaderCompany />
            <div className="min-w-full min-h-screen bg-primary pt-4 pb-4 relative">
                <div className="w-[60%] h-[80%] mx-auto p-[2rem] mt-10 bg-white rounded-[15px]">
                    <h1 className="text-center text-3xl font-bold">ĐÁNH GIÁ QUÁ TRÌNH LÀM VIỆC</h1>
                    <div className="mt-4">
                        <img src={avt} 
                        className="h-[160px] w-[160px] mx-auto mt-4 rounded-[5px] block object-cover"
                        alt="" />
                        <p className="text-2xl mt-4 font-bold text-center">Luu Tran Anh Khoa</p>
                        <div className="w-[70%] mx-auto mt-6">
                            <p className="text-xl">Vị trí: Frontend Developer</p>
                            <div className="flex mt-2 justify-between text-xl">
                                <p>Ngày bắt đầu: 17/02/2022</p>
                                <p>Ngày kết thúc: 22/05/2022</p>
                            </div>
                            <div className="flex mt-4">
                                <p className="text-xl mt-2">Đánh giá: </p>
                                <textarea name="" className="ml-[6rem] border-2 w-[60%] h-[10%] px-5 py-2 rounded-lg border-slate-300  outline-none resize-none"/>
                            </div>
                            <button className="w-[20%] h-10 mt-10 p-2 rounded-lg text-white bg-orange-btn">Xác nhận</button>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}
 
export default Evaluate;