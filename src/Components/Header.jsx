import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo1 from '../assets/LogoCV.png'
import { AiOutlineUser } from 'react-icons/ai'
import { Context } from '../Context/Context'
import { Web3Context } from '../Context/Web3ContextProvider'
import * as contractConst from '../Api/contractConst'

export default function Header() {
  const { contractStudentBusiness, web3, setContractStudentBusiness, setAddress } =
    useContext(Web3Context)
  const { existAccount, setExistAccount, isLoggedIn } = useContext(Context)
  async function connectMetamask() {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    })
    console.log(accounts[0])

    var myContract = new web3.eth.Contract(
      contractConst.abiStudentBusiness,
      contractConst.addressStudentBusiness
    )
    setAddress(accounts[0])
    await myContract.methods
      .checkExistStudent(accounts[0])
      .call()
      .then((success) => {
        console.log(success)
        if (success) setExistAccount(true)
        else setExistAccount(false)
      })
      .catch((error) => {
        console.log(error)
      })
    setContractStudentBusiness(myContract)
  }

  return (
    <div>
      <nav className="w-full h-24 bg-primary flex justify-around items-center text-white">
        <Link to="/">
          <img className="w-[30%] cursor-pointer" src={logo1} alt="logo" />
        </Link>

        <div className="flex items-center">
          <ul className="flex text-xl">
            <Link to="/" className="px-8">
              HOME
            </Link>
            <Link to="/listcompany" className="px-8">
              COMPANY
            </Link>
            {existAccount && (
              <Link to="/mycv" className="px-8 ">
                MY CV
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
              <Link to="/profile" className="px-8">
                <AiOutlineUser className="cursor-pointer" size={40} />
              </Link>
            ) : (
              <Link
                to="/login"
                className=" px-10 py-2 text-[18px] text-center bg-secondary rounded-[24px]"
              >
                Login
              </Link>
            )
          ) : (
            <Link
              to="/createcv"
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
