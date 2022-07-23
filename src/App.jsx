import { useState, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Student from './Page/Student'
import Company from './Page/ListCompany'
import Mycv from './Page/Mycv'
import Login from './Page/Login'
import LoginCompany from './Page/Company/LoginCompany/Index'
import 'aos/dist/aos.css'
import Register from './Page/Register'
import Createcv from './Page/Createcv'
import CompanyDetail from './Page/CompanyDetail'
import Profile from './Page/Profile'
import SignupCompany from './Page/Company/SignupCompany'
import EmployeeCompany from './Page/Company/EmployeeCompany'
import EmployeeDetail from './Page/EmployeeDetail'
import Evaluate from './Page/Evaluate'
import ProfileCompany from './Page/Company/ProfileCompany'
import PostCompany from './Page/Company/PostCompany'
import ManagePost from './Page/Company/ManagePost'
import HomeCompany from '@page/Company/HomeCompany'
import DashboardCompany from '@page/Company/DashboardCompany'
import aos from 'aos'
import ContractMiddleware from '@/Middleware/ContractMiddleware'
import ContractMiddlewareCompany from '@/Middleware/ContractMiddlewareCompany'
import Test from '@/Page/Test'
import LayoutHeader from '@layout/LayoutHeader'
import LayoutHeaderCompany from '@layout/LayoutHeaderCompany'
import LayoutDashboardCompany from '@layout/LayoutDashboardCompany'

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
                <Route path="evaluate" element={<Evaluate />} />
                <Route path="test" element={<Test />} />
              </Route>
              <Route path="">
                <Route path="mycv" element={<Mycv />} />
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
              <Route path="" element={<LayoutHeaderCompany></LayoutHeaderCompany>}>
                <Route path="employee" element={<EmployeeCompany />} />
                <Route path="managepost" element={<ManagePost />} />
                <Route path="employeedetail" element={<EmployeeDetail />} />
                <Route path="profile" element={<ProfileCompany />} />
                <Route path="post" element={<PostCompany />} />
              </Route>
              <Route path="" element={<LayoutDashboardCompany></LayoutDashboardCompany>}>
                <Route path="dashboard" element={<DashboardCompany />} />
              </Route>
            </Route>
            <Route
              path=""
              element={
                <ContractMiddlewareCompany requestAddress={true}> </ContractMiddlewareCompany>
              }
            >
              <Route path="" element={<LayoutHeaderCompany></LayoutHeaderCompany>}>
                <Route path="signup" element={<SignupCompany />} />
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
