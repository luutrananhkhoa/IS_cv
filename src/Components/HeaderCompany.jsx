import react from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/Fa';
import logo1 from'../assets/LogoCV.png'

const HeaderCompany = () => {
     let navigate=useNavigate();
    function HandleClick(){
        navigate("/homecompany")
    }
    const handleLogoClick =()=>{
        navigate("/homecompany")
      }
    return (  
        <>
            <nav className="w-full h-24 bg-primary flex justify-around items-center text-white">
            <img className="w-[12%] cursor-pointer" src={logo1} alt="logo" onClick={handleLogoClick} />
              <div className="flex items-center">
                  <ul className="flex text-xl">
                    <Link to="/homecompany" className="px-8 hover:text-secondary">HOME</Link>
                    <Link to="/employee" className="px-8 hover:text-secondary">EMPLOYEE</Link>
                    <Link to="/post" className="px-8 hover:text-secondary">RECRUIT</Link>
                    <Link to="/managepost" className="px-8 hover:text-secondary">MY POST</Link>
                    <Link to="/companyprofile"><FaUser size="1.5rem" className="mr-4" /></Link>
                  </ul>
              </div>
          </nav>
        </>
    );
}
 
export default HeaderCompany;