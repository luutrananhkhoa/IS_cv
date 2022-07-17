import React, { useContext } from 'react'
import HeaderCompany from './../../Components/HeaderCompany'
import { Context } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'
import { Web3Context } from '../../Context/Web3ContextProvider'

const Post = () => {
  // const {  } = useContext(Context)
  const navigate = useNavigate()
  const { contractStudentBusiness, address } = useContext(Web3Context)

  const handleAdd = async () => {
    await contractStudentBusiness.methods
      .addRecruit(address, $('#_title').val(), $('#_description').val())
      .send({
        from: address,
        gas: 3000000,
      })
      .then((success) => navigate('/company'))
      .catch((error) => {
        console.log(error)
        if (error.code === 4001) alert('Bạn chưa thanh toán hoá đơn')
      })
  }
  return (
    <>
      <HeaderCompany />
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-primary">
        <div className="mt-[-20%] w-[60%]">
          <h1 className=" text-white text-5xl font-bold">Post</h1>
          <div className="text-left w-[100%] mt-[2rem]">
            <div className="w-[10%]">
              <label className=" text-white text-lg mr-10" name="">
                Title
              </label>
            </div>
            <input
              type="text"
              id="_title"
              className="text-white w-[30%] placeholder-gray-300 mt-2 bg-secondary p-3 rounded-[10px] outline-none"
              placeholder="Enter title..."
            />
          </div>
          <div>
            <div className="w-[10%]">
              <label className=" text-white text-lg mr-10" name="">
                Description
              </label>
            </div>
            <input
              type="text"
              id="_description"
              className="text-white w-[30%] mt-2 placeholder-gray-300 bg-secondary p-3 rounded-[10px] outline-none"
              placeholder="Enter description..."
            />
          </div>
          <button
            type="submit"
            className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium hover:bg-secondary  ease-in duration-100 bg-orange-btn rounded-[30px]"
            onClick={handleAdd}
          >
            Add
          </button>
          {/* <button 
                    type="submit" id="btn_show" className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-orange-btn rounded-[30px]"
                    onClick={show}
                >showw</button> */}
        </div>
      </div>
    </>
  )
}

export default Post
