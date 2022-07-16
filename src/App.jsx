import { useState, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Student from './Page/Student'
import Company from './Page/Company'
import Mycv from './Page/Mycv'
import Login from './Page/Login'
import LoginCompany from './Page/LoginCompany'
import aos from 'aos'
import 'aos/dist/aos.css'
import Register from './Page/Register'
import Createcv from './Page/Createcv'
import CompanyDetail from './Page/CompanyDetail'
import ModalSuccess from './Components/ModalSuccess'
import Profile from './Page/Profile'
import CompanyManage from './Page/CompanyManage'
import Employee from './Page/Employee'
import EmployeeDetail from './Page/EmployeeDetail'
import Evaluate from './Page/Evaluate'
import CompanyProfile from './Page/Company/CompanyProfile'
import Post from './Page/Company/Post'
import ManagePost from './Page/Company/ManagePost'
import HomeCompany from './Page/HomeCompany'
import 'https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js'
import { Web3Context } from './Context/Web3ContextProvider'
import * as contractConst from './Api/contractConst'
import Web3 from 'web3'
import process from 'process'
import { Buffer } from 'buffer'
import EventEmitter from 'events'
function App() {
  const { setWeb3, setContractStudentBusiness } = useContext(Web3Context)

  useEffect(() => {
    (async () => {
      aos.init()
      aos.refresh()
      const provider = await detectEthereumProvider()
      if (provider) {
        console.log('Ethereum successfully detected!')
      } else {
        console.log('NOOOOOO')
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      console.log(accounts[0])

      var web3 = new Web3(provider)
      var myContract = new web3.eth.Contract(
        contractConst.abiStudentBusiness,
        contractConst.addressStudentBusiness
      )
      setContractStudentBusiness(myContract)
    })()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homecompany" element={<HomeCompany />} />
        <Route path="/student" element={<Student />} />
        <Route path="/company" element={<Company />} />
        <Route path="/mycv" element={<Mycv />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logincompany" element={<LoginCompany />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createcv" element={<Createcv />} />
        <Route path="/companydetail" element={<CompanyDetail />} />
        <Route path="/modalsuccess" element={<ModalSuccess />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/companymanage" element={<CompanyManage />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employeedetail" element={<EmployeeDetail />} />
        <Route path="/evaluate" element={<Evaluate />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/managepost" element={<ManagePost />} />
      </Routes>
    </div>
  )
}

export default App
