import { useState, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Student from './Page/Student'
import Company from './Page/ListCompany'
import Mycv from './Page/Mycv'
import Login from './Page/Login'
import LoginCompany from './Page/Company/LoginCompany'
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
import aos from 'aos'
import ContractMiddleware from '@/Middleware/ContractMiddleware'
import ContractMiddlewareCompany from '@/Middleware/ContractMiddlewareCompany'
import Test from '@/Page/Test'
import LayoutHeader from '@layout/LayoutHeader'
import LayoutHeaderCompany from '@layout/LayoutHeaderCompany'

function App() {
  aos.init()
  aos.refresh()
  return (
    <div className="App">
      <Routes>
        <Route path="">
          <Route path="">
            <Route path="" element={<ContractMiddleware></ContractMiddleware>}>
              <Route path="" element={<LayoutHeader></LayoutHeader>}>
                <Route path="" element={<Home />} />
                <Route path="student" element={<Student />} />
                <Route path="listcompany" element={<Company />} />
                <Route path="companydetail" element={<CompanyDetail />} />
                <Route path="modalsuccess" element={<ModalSuccess />} />
                <Route path="evaluate" element={<Evaluate />} />
                <Route path="test" element={<Test />} />
              </Route>
            </Route>
            <Route
              path=""
              element={<ContractMiddleware requestAddress={true}> </ContractMiddleware>}
            >
              <Route path="createcv" element={<Createcv />} />
            </Route>
            <Route
              path=""
              element={<ContractMiddleware requestAccount={true}> </ContractMiddleware>}
            >
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="" element={<ContractMiddleware requestLogin={true}></ContractMiddleware>}>
              <Route path="" element={<LayoutHeader></LayoutHeader>}>
                <Route path="mycv" element={<Mycv />} />
                <Route path="register" element={<Register />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Route>
          </Route>

          <Route path="company">
            <Route path="" element={<ContractMiddlewareCompany></ContractMiddlewareCompany>}>
              <Route path="" element={<LayoutHeaderCompany></LayoutHeaderCompany>}>
                <Route path="" element={<HomeCompany />} />
              </Route>
            </Route>
            <Route
              path=""
              element={<ContractMiddlewareCompany requestLogin={true}></ContractMiddlewareCompany>}
            >
              <Route path="" element={<LayoutHeaderCompany></LayoutHeaderCompany>}></Route>
              <Route path="employee" element={<Employee />} />
              <Route path="managepost" element={<ManagePost />} />
              <Route path="employeedetail" element={<EmployeeDetail />} />
              <Route path="profile" element={<CompanyProfile />} />
              <Route path="post" element={<Post />} />
            </Route>
            <Route
              path=""
              element={
                <ContractMiddlewareCompany requestAddress={true}> </ContractMiddlewareCompany>
              }
            >
              <Route path="" element={<LayoutHeaderCompany></LayoutHeaderCompany>}>
                <Route path="manage" element={<CompanyManage />} />
              </Route>
            </Route>

            <Route
              path=""
              element={
                <ContractMiddlewareCompany requestAccount={true}> </ContractMiddlewareCompany>
              }
            >
              <Route path="login" element={<LoginCompany />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
