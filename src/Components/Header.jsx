import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo1 from'../assets/LogoCV.png'; 
import { AiOutlineUser } from 'react-icons/ai'
import { Context } from '../Context/Context';

export default function Header() {
    let navigate=useNavigate();

    const {status, setStatus} = useContext(Context)
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
                  {status && 
                  <ul className="flex text-xl">
                  <Link to="/" className="px-8">HOME</Link>
                  <Link to="/company" className="px-8">COMPANY</Link>
                  <Link to="/mycv" className="px-8">MY CV</Link>
                
                </ul>}
                {!status && 
                  <ul className="flex text-xl">
                  <Link to="/" className="px-8">HOME</Link>
                  <Link to="/company" className="px-8">COMPANY</Link>
                  <Link to="/login" className="px-8">MY CV</Link>
                </ul>}
                  {status && <Link to="/profile" className="px-8"><AiOutlineUser className="cursor-pointer" size={40}/></Link> }
                  {!status && <button className="w-[140px] h-[40px] px-10 text-[18px] text-center bg-secondary rounded-[24px]"
                      onClick={handleClick}
                      >LOGIN</button>}
              </div>
          </nav>
    </div>
  )
}
