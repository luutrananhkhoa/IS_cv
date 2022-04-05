import React from 'react';
import Header from '../Components/Header';
import avt from '../assets/avt.jpg';
import { IoMdMail } from 'react-icons/Io';
import { BsFillTelephoneFill } from 'react-icons/Bs';
import { BsFacebook } from 'react-icons/Bs';
import { BsGithub } from 'react-icons/Bs';
import { BsFillHouseDoorFill } from 'react-icons/Bs';
import Progressbar from '../Components/Progressbar';

const Mycv = () => {

    //Progress Bar
    const skills = [{
        title: 'HTML',
        per: '75'
    }];
    
    return ( 
        <>
          <Header/>
            <div className="w-full min-h-screen bg-primary pb-[120px]">
                <div className="flex justify-around items-center mb-3">
                    <h1 className="font-bold text-2xl text-white ">My CV</h1>
                    <button className="h-[45px] w-[140px] bg-secondary rounded-[30px] text-white text-xl">Save</button>
                </div>
                <div className="w-[60%] h-[200vh] mx-auto bg-white flex flex-row">
                    <div className="w-[30%]">
                        <img src={avt} className="h-[160px] w-[160px] mx-auto mt-12 rounded-[50%]"/>
                        <div className="ml-6 mt-8 flex items-center">
                            <IoMdMail size="2rem" className="text-secondary" />
                            <p className="ml-2">ltakhoa1902@gmail.com</p>
                        </div>
                        <div className="ml-6 mt-6 flex items-center">
                            <BsFillTelephoneFill size="2rem" className="text-secondary" />
                            <p className="ml-2">+84847232292</p>
                        </div>
                        <div className="ml-6 mt-6 flex items-center">
                            <BsFillHouseDoorFill size="2rem" className="text-secondary" />
                            <p className="ml-2">HCM City, VN</p>
                        </div>
                        <div className="ml-6 mt-6 flex items-center">
                            <BsFacebook size="2rem" className="text-secondary" />
                            <p className="ml-2 w-full">anhkhoa.luutran.3</p>
                        </div>
                        <div className="ml-6 mt-6 flex items-center">
                            <BsGithub size="2rem" className="text-secondary" />
                            <p className="ml-2">github.com/luutrananhkhoa</p>
                        </div>
                        <div className="mt-[4rem] ml-6">
                            <h1 className="font-bold text-3xl">SKILLS</h1>
                           <hr className="w-[90%] h-[2px] mt-4 border-0 bg-primary"/>
                            <div className="mt-4 w-[85%]">
                                <Progressbar title={skills[0].title} per={skills[0].per} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="h-[10rem] mt-12 bg-secondary">
                            <div className="ml-6 pt-6 text-white">
                                <h1 className="text-4xl font-bold">Luu Tran Anh Khoa</h1>
                                <span className="text-[1.3rem] mt-4">Fresher</span>
                                <hr className="w-[40%] h-[2px] mt-4 border-0 bg-white"/>
                            </div>
                        </div>
                        <div className="text-primary">
                            <div className="mt-[2rem] ml-4">
                                <h1 className=" text-2xl font-bold ">EDUCATION</h1>
                                <hr className="w-[90%] h-[3px] border-0 bg-primary"/>
                                <div>
                                    <h1 className= "font-bold text-[1.5rem] mt-3 ml-2">University of Information Technology</h1>
                                    <h2 className="ml-6 font-semibold text-xl">Information System</h2>
                                    <div className="ml-8">
                                        <span>08/2019</span> - <span>present</span><br />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[3rem] ml-4 ">
                                <h1 className="text-2xl font-bold text-primary ">WORK EXPERIENCE</h1>
                                <hr className="w-[90%] h-[3px] border-0 bg-primary"/>
                            </div>
                            <div className="mt-[3rem] ml-4 ">
                                <h1 className="text-2xl font-bold text-primary ">CERTIFICATES</h1>
                                <hr className="w-[90%] h-[3px] border-0 bg-primary"/>
                            </div>
                            <div className="mt-[3rem] ml-4 ">
                                <h1 className="text-2xl font-bold text-primary ">PERSONAL PROJECTS</h1>
                                <hr className="w-[90%] h-[3px] border-0 bg-primary"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </>
    );
}

export default Mycv;