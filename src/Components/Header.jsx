import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
     let navigate=useNavigate();
    function HandleClick(){
        navigate("/login")
    }
  return (
      <div>
          <nav className="w-full h-24 bg-primary flex justify-around items-center text-white">
              <h1 className="text-4xl">LOGO</h1>
              <div className="flex items-center">
                  <ul className="flex text-xl">
                  <Link to="/" className="px-8">HOME</Link>
                  <Link to="/student" className="px-8">STUDENTS</Link>
                  <Link to="/company" className="px-8">COMPANY</Link>
                  <Link to="/mycv" className="px-8">MY CV</Link>
                  </ul>
                    <button className="w-[140px] h-[40px] px-10 text-[18px] text-center bg-orange-btn rounded-[24px]"
                      onClick={HandleClick}
                      >LOGIN</button>
              </div>
          </nav>
    </div>
  )
}
