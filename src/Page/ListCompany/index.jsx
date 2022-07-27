import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Web3Context } from '../../Context/Web3ContextProvider'

const Index = () => {
  const { contractStudentBusiness } = useContext(Web3Context)

  const [listCompany, setListCompany] = useState()
  const [listIIG, setListIIG] = useState()
  const ref = useRef()

  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getListBusiness()
        .call()
        .then((success) => setListCompany(success))
        .catch((error) => console.error(error))
    }
  }, [contractStudentBusiness])

  return (
    <>
      <div className="min-w-full min-h-screen bg-primary">
        <div className="w-[75%] flex flex-col mx-auto">
          <div className="pt-10">
            <h1 className="text-6xl text-white font-bold">COMPANY</h1>
          </div>
          <div className="mt-6 w-[100%] flex">
            <input
              type="text"
              className="py-3 px-6 w-full rounded-l-lg outline-none"
              placeholder="Company name"
            />
            <button className="py-3 px-6 bg-secondary text-white rounded-r-lg">Search</button>
          </div>
          <div className="mt-10 ">
            <div className="flex bg-secondary p-3 rounded-t-lg justify-between text-white text-xl">
              <p className="w-[40%]">Name</p>
              <p className="w-[20%]">Focus Area</p>
              <p className="w-[20%]">National</p>
            </div>
            {contractStudentBusiness &&
              listCompany &&
              listCompany[0]?.map((item, index) => (
                <Link key={index} to={`/companydetail?address=${listCompany?.[0][index]}`}>
                  <div
                    key={item}
                    className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer"
                  >
                    <p className="w-[40%]">{listCompany?.[1][index]}</p>
                    <p className="w-[20%]">{listCompany?.[3][index]}</p>
                    <p className="w-[20%]">{listCompany?.[2][index]}</p>
                    <input
                      type="hidden"
                      id="_address"
                      name="_address"
                      value={listCompany?.[0][index]}
                      ref={ref}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* IIG */}
        <div className="w-[75%] flex flex-col mx-auto">
          <div className="pt-10">
            <h1 className="text-6xl text-white font-bold">IIG</h1>
          </div>
          <div className="mt-6 w-[100%] flex">
            <input
              type="text"
              className="py-3 px-6 w-full rounded-l-lg outline-none"
              placeholder="Company name"
            />
            <button className="py-3 px-6 bg-secondary text-white rounded-r-lg">Search</button>
          </div>
          <div className="mt-10 ">
            <div className="flex bg-secondary p-3 rounded-t-lg justify-between text-white text-xl">
              <p className="w-[40%]">Name</p>
              <p className="w-[20%]">Focus Area</p>
              <p className="w-[20%]">National</p>
            </div>
            {contractStudentBusiness &&
              listCompany &&
              listCompany[0]?.map((item, index) => (
                <Link key={index} to={`/companydetail?address=${listCompany?.[0][index]}`}>
                  <div
                    key={item}
                    className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer"
                  >
                    <p className="w-[40%]">{listCompany?.[1][index]}</p>
                    <p className="w-[20%]">{listCompany?.[3][index]}</p>
                    <p className="w-[20%]">{listCompany?.[2][index]}</p>
                    <input
                      type="hidden"
                      id="_address"
                      name="_address"
                      value={listCompany?.[0][index]}
                      ref={ref}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
