import React, { useContext } from 'react'
import avt from '../assets/avt.jpg'
import { Context } from '../Context/Context'
import { Web3Context } from '../Context/Web3ContextProvider'

const Evaluate = () => {
  const { addr, addressTemp, addrCompany, listStudent, setListStudent, setSkills } =
    useContext(Context)
  const { contractStudentBusiness } = useContext(Web3Context)
  console.log(addrCompany)
  console.log(addressTemp)

  const handleClick = () => {
    contractStudentBusiness.methods
      .sendReview(addressTemp, addrCompany, $('#_content').val())
      .call()
  }
  const show = () => {
    contractStudentBusiness.methods
      .getReview(addressTemp, addrCompany)
      .call()
      .then((res) => console.log(res))
  }
  return (
    <>
      <div className="min-w-full min-h-screen bg-primary pt-4 pb-4 relative">
        <div className="w-[60%] h-[80%] mx-auto p-[2rem] mt-10 bg-white rounded-[15px]">
          <h1 className="text-center text-3xl font-bold">ĐÁNH GIÁ QUÁ TRÌNH LÀM VIỆC</h1>
          <div className="mt-4">
            <img
              src={avt}
              className="h-[160px] w-[160px] mx-auto mt-4 rounded-[5px] block object-cover"
              alt=""
            />
            <p className="text-2xl mt-4 font-bold text-center">Luu Tran Anh Khoa</p>
            <div className="w-[70%] mx-auto mt-6">
              {/* <p className="text-xl">Vị trí: Frontend Developer</p>
                            <div className="flex mt-2 justify-between text-xl">
                                <p>Ngày bắt đầu: 17/02/2022</p>
                                <p>Ngày kết thúc: 22/05/2022</p>
                            </div> */}
              <div className="flex mt-4">
                <p className="text-xl mt-2">Đánh giá: </p>
                <input
                  type="text"
                  name=""
                  id="_content"
                  className="ml-[6rem] border-2 w-[60%] h-[10%] px-5 py-2 rounded-lg border-slate-300  outline-none resize-none"
                />
              </div>
              <button
                onClick={handleClick}
                className="w-[20%] h-10 mt-10 p-2 rounded-lg text-white bg-orange-btn"
              >
                Xác nhận
              </button>
              <button
                onClick={show}
                className="w-[20%] h-10 mt-10 p-2 rounded-lg text-white bg-orange-btn"
              >
                Show
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Evaluate
