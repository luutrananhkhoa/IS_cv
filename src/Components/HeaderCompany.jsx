import react from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/Fa';

const HeaderCompany = () => {
    // let navigate=useNavigate();
    // function HandleClick(){
    //     navigate("/")
    // }
    return (  
        <>
            <nav className="w-full h-24 bg-primary flex justify-around items-center text-white">
              <h1 className="text-4xl">LOGO</h1>
              <div className="flex items-center">
                  <ul className="flex text-xl">
                  <Link to="/employee" className="px-8 hover:text-secondary">EMPLOYEE</Link>
                  <Link to="/companymanage" className="px-8 hover:text-secondary">MY COMPANY</Link>
                  </ul>
                    <FaUser size="1.5rem" className="mr-4" />
              </div>
          </nav>
        </>
    );
}
 
export default HeaderCompany;