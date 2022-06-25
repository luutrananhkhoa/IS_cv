import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo1 from'../assets/LogoCV.png'; 
import { AiOutlineUser } from 'react-icons/ai'

export default function Header() {
     let navigate=useNavigate();
    function handleClick(){
        navigate("/login")
    }
    const handleLogoClick =()=>{
      navigate("/")
    }
  return (
      <div>
          <nav className="w-full h-24 bg-primary flex justify-around items-center text-white">
              <img className="w-[12%] cursor-pointer" src={logo1} alt="logo" onClick={handleLogoClick} />
              <div className="flex items-center">
                  <ul className="flex text-xl">
                  <Link to="/" className="px-8">HOME</Link>
                  {/* <Link to="/student" className="px-8">STUDENTS</Link> */}
                  <Link to="/company" className="px-8">COMPANY</Link>
                  <Link to="/mycv" className="px-8">MY CV</Link>
                  <Link to="/register" className="px-8">INFOMATION</Link>
                  {/* <Link to="/companymanage" className="px-8">Link company</Link> */}
                  </ul>
                    {/* <button className="w-[140px] h-[40px] px-10 text-[18px] text-center bg-orange-btn rounded-[24px]"
                      onClick={handleClick}
                      >LOGIN</button> */}
                      <AiOutlineUser className="cursor-pointer" size={40}/>
              </div>
          </nav>
    </div>
  )
}
