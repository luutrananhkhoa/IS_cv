import React from 'react'
import { useNavigate } from 'react-router-dom'

const Student = () => {
  let navigate = useNavigate()
  function CompanyOnClick() {
    navigate('/CompanyDetail')
  }
  const companies = [
    {
      id: 1,
      name: 'Dang Minh Quan',
      location: 'Junior',
      jobs: 'Information System',
    },
    {
      id: 2,
      name: 'Luu Tran Anh Khoa',
      location: 'Junior',
      jobs: 'Information System',
    },
  ]
  return (
    <>
      <div className="min-w-full min-h-screen bg-primary">
        <div className="w-[75%] flex flex-col mx-auto">
          <div className="pt-10">
            <h1 className="text-6xl text-white font-bold">STUDENTS</h1>
            <p className="mt-2 text-2xl font-light text-white">120 Students</p>
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
              <p className="w-[30%]">Professional title</p>
              <p className="w-[30%]">Falcuty</p>
            </div>
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer"
                onClick={CompanyOnClick}
              >
                <p className="w-[40%]">{company?.name}</p>
                <p className="w-[30%]">{company?.location}</p>
                <p className="w-[30%]">{company?.jobs} </p>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </>
  )
}

export default Student
