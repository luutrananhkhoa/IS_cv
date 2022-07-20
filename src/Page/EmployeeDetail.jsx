import React, { useContext } from 'react'
import avt from '@asset/avt.jpg'
import { Context } from '../Context/Context'

const EmployeeDetail = () => {
  const { addr, addressTemp, addrCompany, listStudent, setListStudent, setSkills } =
    useContext(Context)

  console.log(addrCompany)
  console.log(addressTemp)
  return (
    <>
      <div className="min-h-screen min-w-full bg-primary pb-[8rem]">
        {/* <div className="w-[70%] h-[100%] mx-auto pt-[2rem] pb-[1rem] bg-white rounded-md flex flex-col">
                    <p className="ml-10 text-xl">Lưu Trần Anh Khoa muốn đánh giá quá trình làm việc!</p>
                    <div className="flex justify-end px-10">
                        <button className="w-[4.5rem] h-[2rem] bg-[#ccc] mr-[1rem] rounded-lg">Từ chối</button>
                        <Link to="/evaluate" className="px-8">
                            <button  className="w-[6rem] h-[2rem] bg-[#E42626] text-white rounded-lg">Chấp nhận</button>
                        </Link>
                        
                    </div>
                </div> */}
        <div className="p-[2rem] bg-primary"></div>
        <div className="w-[60%] h-[100%] mx-auto pt-[1rem] bg-white rounded-md flex flex-col pb-[4rem]">
          <div className="w-full px-10 py-10 flex justify-between">
            <div className="flex">
              <img
                src={avt}
                alt="Avatar"
                className="h-[140px] w-[8rem] rounded-md block object-cover"
              />
              <div className="flex flex-col">
                <p className="ml-6 text-[1.8rem] font-semibold">Luu Tran Anh Khoa</p>
              </div>
            </div>
          </div>
          <div className="w-full px-10 flex flex-col justify-between">
            <p className="text-[1.8rem] font-bold">Information</p>
          </div>
          <div className="mt-12 px-10">
            <div className="flex">
              <div className="w-[15%]">
                <label className="text-xl ">Position: </label>
              </div>
              <p className="ml-[4rem] text-xl">Frontend developer</p>
            </div>
            <div className="flex mt-10">
              <div className="w-[15%]">
                <label className="text-xl ">Major:</label>
              </div>
              <p className="ml-[4rem] text-xl">Information System</p>
            </div>
            <div className="flex mt-10">
              <div className="w-[15%]">
                <label className="text-xl ">Birth Date:</label>
              </div>
              <p className="ml-[4rem] text-xl">19/02/2001</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeDetail
