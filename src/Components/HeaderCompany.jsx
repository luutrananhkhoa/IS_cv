import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo1 from '../assets/LogoCV.png'
import { Context } from '../Context/Context'
import { Web3Context } from '../Context/Web3ContextProvider'
import * as contractConst from '../Api/contractConst'
import { FaUser } from 'react-icons/fa'

export default function HeaderCompany() {
  const { contractStudentBusiness, setAddress, removeJwtBusiness } = useContext(Web3Context)
  const { existAccount, setExistAccount, isLoggedIn } = useContext(Context)
  async function connectMetamask() {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    })
    let addressTemp = accounts[0]
    setAddress(addressTemp)

    await contractStudentBusiness.methods
      .checkExistBusiness(addressTemp)
      .call()
      .then((success) => {
        if (success === '1') {
          setExistAccount(true)
          removeJwtBusiness()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <nav className="w-full h-24 bg-primary flex justify-around items-center text-white">
        <Link to="/">
          <img className="w-[30%] cursor-pointer" src={logo1} alt="logo" />
        </Link>

        <div className="flex items-center">
          <ul className="flex text-xl">
            <Link to="/company" className="px-8">
              HOME
            </Link>
            <Link to="/company/employee" className="px-8">
              EMPLOYEE
            </Link>
            {isLoggedIn && (
              <Link to="/company/managepost" className="px-8 ">
                MY POST
              </Link>
            )}
          </ul>
          {!contractStudentBusiness ? (
            <button
              onClick={connectMetamask}
              className=" px-4  py-2 text-[18px] text-center bg-secondary rounded-[24px]"
            >
              Connect Metamask
            </button>
          ) : existAccount ? (
            isLoggedIn ? (
              <Link to="/company/profile" className="px-8">
                <FaUser className="cursor-pointer" size={32} />
              </Link>
            ) : (
              <Link
                to="/company/login"
                className=" px-10 py-2 text-[18px] text-center bg-secondary rounded-[24px]"
              >
                Login
              </Link>
            )
          ) : (
            <Link
              to="/company/manage"
              className="px-10 py-2 text-[18px] text-center bg-secondary rounded-[24px]"
            >
              Sign up
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
