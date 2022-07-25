import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo1 from '@asset/LogoCV.png'
import { AiOutlineUser } from 'react-icons/ai'
import { Context } from '../Context/Context'
import { Web3Context } from '../Context/Web3ContextProvider'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t, i18n } = useTranslation()
  const { address, setAddress, removeJwtEmployee, contractStudentBusiness } =
    useContext(Web3Context)
  const { existAccount, setExistAccount, isLoggedIn } = useContext(Context)
  async function connectMetamask() {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    })

    let addressTemp = accounts[0]
    setAddress(addressTemp)

    await contractStudentBusiness.methods
      .checkExistStudent(addressTemp)
      .call()
      .then((success) => {
        if (success === '1') {
          setExistAccount(true)
          removeJwtEmployee()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
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
          {isLoggedIn && (
            <Link to={`/mycv?address=${address}`} className="px-8 ">
              MY CV
            </Link>
          )}
        </ul>
        {/* {t('content.functional')} */}
        <div className="flex justify-around">
          ...
          <button onClick={() => i18n.changeLanguage('vi')}>vi</button>
          <button onClick={() => i18n.changeLanguage('en')}>en</button>
        </div>
        {!address ? (
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
  )
}
