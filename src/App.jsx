import React, { useState, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Social from './Page/Social'
import Mycv from './Page/Mycv'
import Login from './Page/Login'
import Register from './Page/Register'
import Profile from './Page/Profile'

import ContractMiddleware from '@/Middleware/ContractMiddleware'
import Test from '@page/Test'
import LayoutHeader from '@layout/LayoutHeader'

import AddressMiddleware from '@middleware/AddressMiddleware'
import { ToastContainer } from '@component/Toast'
import CustomCV from './Page/CustomCV'

function App() {
  return (
    <div className="App">
  
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="">
          <Route path="">
            <Route path="" element={<ContractMiddleware></ContractMiddleware>}>
              <Route path="" element={<LayoutHeader></LayoutHeader>}>
                <Route path="" element={<Home />} />
                {/* <Route path="student" element={<Student />} /> */}
                <Route path="social" element={<Social />} />
                {/* <Route path="iig" element={<IIG />} /> */}
                {/* <Route path="companydetail" element={<CompanyDetail />} /> */}
                {/* <Route path="evaluate" element={<Evaluate />} /> */}
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="">
                <Route path="customcv" element={<CustomCV />} />
                <Route path="test" element={<Test />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="" element={<AddressMiddleware></AddressMiddleware>}>
                {/* <Route path="mycv" element={<Mycv />} /> */}
              </Route>
            </Route>
            <Route path="" element={<ContractMiddleware requestAddress> </ContractMiddleware>}>
              {/* <Route path="createcv" element={<Createcv />} /> */}
            </Route>
            <Route path="" element={<ContractMiddleware requestAccount> </ContractMiddleware>}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="" element={<ContractMiddleware requestLogin></ContractMiddleware>}>
              <Route path="" element={<LayoutHeader></LayoutHeader>}></Route>
            </Route>
          </Route>

          {/* <Route path="company">
            <Route path="" element={<ContractMiddlewareCompany></ContractMiddlewareCompany>}>
              <Route path="" element={<LayoutHeaderCompany></LayoutHeaderCompany>}>
                <Route path="" element={<HomeCompany />} />
              </Route>
            </Route>
            <Route
              path=""
              element={<ContractMiddlewareCompany requestLogin></ContractMiddlewareCompany>}
            >
              <Route path="" element={<LayoutHeaderCompany></LayoutHeaderCompany>}>
                <Route path="employee" element={<EmployeeCompany />} />
                <Route path="managepost" element={<ManagePost />} />
                <Route path="employeedetail" element={<EmployeeDetail />} />
                <Route path="profile" element={<ProfileCompany />} />
                <Route path="post" element={<PostCompany />} />
              </Route>
              <Route path="">
                <Route path="dashboard/:special" element={<DashboardCompany />} />
              </Route>
            </Route>
            <Route
              path=""
              element={<ContractMiddlewareCompany requestAddress> </ContractMiddlewareCompany>}
            >
              <Route path="" element={<LayoutHeaderCompany></LayoutHeaderCompany>}></Route>
            </Route>

            <Route
              path=""
              element={<ContractMiddlewareCompany requestAccount> </ContractMiddlewareCompany>}
            >
              <Route path="login" element={<LoginCompany />} />
            </Route>
          </Route> */}
        </Route>
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
