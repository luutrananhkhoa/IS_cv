import react, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/Fa';
import logo1 from'../assets/LogoCV.png'
import { Context } from '../Context/Context';

const HeaderCompany = () => {
    let navigate=useNavigate();
    const {statusB, setStatusB} = useContext(Context)

    function handleClick(){
        navigate("/logincompany")
    }
    const handleLogoClick =()=>{
        navigate("/homecompany")
      }
    return (  
        <>
            <nav className="w-full h-24 bg-primary flex justify-around items-center text-white">
            <img className="w-[12%] cursor-pointer" src={logo1} alt="logo" onClick={handleLogoClick} />
              <div className="flex items-center">
                  <ul className="flex text-xl items-center">
                    <Link to="/homecompany" className="px-8 hover:text-secondary">HOME</Link>
                    <Link to="/employee" className="px-8 hover:text-secondary">EMPLOYEE</Link>
                    <Link to="/managepost" className="px-8 hover:text-secondary">MY POST</Link>
                    {statusB && <Link to="/companyprofile" className="px-8"><FaUser className="cursor-pointer" size={32}/></Link> }
                    {!statusB && <button className="w-[140px] h-[40px] px-10 text-[18px] text-center bg-secondary rounded-[24px]"
                        onClick={handleClick}
                        >LOGIN</button>}
                  </ul>
              </div>
          </nav>
        </>
    );
}
 
export default HeaderCompany;