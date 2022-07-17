import { useState, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Student from './Page/Student'
import Company from './Page/Company'
import Mycv from './Page/Mycv'
import Login from './Page/Login'
import LoginCompany from './Page/LoginCompany'
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
// import process from 'process'
// import { Buffer } from 'buffer'
// import EventEmitter from 'events'
import ContractMiddleware from '@/Components/ContractMiddleware'
import ContractMiddlewareCompany from '@/Components/ContractMiddlewareCompany'
import { Context } from '@/Context/Context'
import Test from '@/Page/Test'
// window.Buffer = Buffer
// window.process = process
// window.EventEmitter = EventEmitter

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContractMiddleware></ContractMiddleware>}>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/listcompany" element={<Company />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createcv" element={<Createcv />} />
          <Route path="/companydetail" element={<CompanyDetail />} />
          <Route path="/modalsuccess" element={<ModalSuccess />} />
          <Route path="/evaluate" element={<Evaluate />} />
        </Route>
        <Route path="/" element={<ContractMiddleware requestLogin={true}></ContractMiddleware>}>
          <Route path="/test" element={<Test />} />
          <Route path="/mycv" element={<Mycv />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/company" element={<ContractMiddlewareCompany></ContractMiddlewareCompany>}>
          <Route path="/company" element={<HomeCompany />} />
          <Route path="/company/login" element={<LoginCompany />} />
          <Route path="/company/manage" element={<CompanyManage />} />
          <Route path="/company/employee" element={<Employee />} />
          <Route path="/company/managepost" element={<ManagePost />} />
          <Route path="/company/employeedetail" element={<EmployeeDetail />} />
          <Route path="/company/profile" element={<CompanyProfile />} />
          <Route path="/company/post" element={<Post />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
