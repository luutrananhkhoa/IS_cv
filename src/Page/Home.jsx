import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import cv from '../assets/Group_27.png';
import Header from '../Components/Header';


const Home = () => {
  let navigate = useNavigate();
  function createCv() {
    navigate("./createcv")
  }
  return (
    <>
      <Header />
      <div className="min-h-screen min-w-full overflow-hidden">
        <div className="h-screen min-h-full bg-primary py-[6rem] flex justify-between px-[174px]">
          <div className="w-6/12">
            <h1 className="text-white text-[3.5rem] w-[100%] font-bold mb-4">You don’t need to be a designer have an impressive CV</h1>
            <p className="text-text text-lg w-[80%]">Effortlessly build a job worthy resume that gets you weird faster.</p>
            <button className="w-[10rem] h-12 text-[1.2rem] font-medium mt-8 bg-secondary text-white hover:cursor-pointer"
              onClick={createCv}>Create My CV</button>
          </div>
          <div className="w-6/12 flex flex-col  ">
            <div className="w-[40%] h-[70%] bg-secondary absolute rounded-[50%] translate-y-[4rem] overflow-hidden"></div>
            <div data-aos="fade-up-left" data-aos-duration="1500">
              <img src={cv} className="w-[65%] ml-[10rem] object-cover origin-top-left rotate-12" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
