import React, { useContext, useState, useEffect } from 'react'
import Header from '../Components/Header'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom'
import { Web3Context } from '../Context/Web3ContextProvider'
import ModalSuccess from '@/Components/ModalSuccess'
import { RingLoader } from 'react-spinners'

export default function Register() {
  const [openModal, setOpenModal] = useState(false)
  const { contractStudentBusiness, address } = useContext(Web3Context)
  const [loading, setLoading] = useState(false)
  async function addSkill(e) {
    e.preventDefault()
    await contractStudentBusiness.methods
      .checkStudentSkill(address, $('#_skill').val())
      .call()
      .then(async (result) => {
        console.log(parseInt(result))
        if (parseInt(result) == 0) {
          setLoading(true)
          await contractStudentBusiness.methods
            .addStudentSkill(address, $('#_skill').val(), $('#_level').val())
            .send({
              from: address,
              gas: 3000000,
            })
            .then((success) => {
              console.log(success)
              setOpenModal(true)
            })
            .catch((error) => {
              console.log(error)
              if (error.code === 4001) alert('Bạn chưa thanh toán hoá đơn')
            })
          setLoading(false)
        } else {
          console.log('Unsuccessfully')
          alert('Kỹ năng đã được đăng ký')
        }
      })
  }

  return (
    <div>
      <Header />
      <RingLoader
        color={'#133ceb'}
        loading={loading}
        cssOverride={{ position: 'fixed', top: '40%', left: '45%', transform: 'trans' }}
        size={150}
      />
   
        <ModalSuccess
          state={[openModal, setOpenModal]}
          content="You have successfully added skill"
          title = "Ok"
          action={() => {}}
        />
    

      <div className="min-w-full min-h-screen bg-primary">
        {/* <AiOutlineArrowLeft size={"48px"} color="white" className="ml-[12rem]"  /> */}
        <h1 className=" text-white text-5xl font-bold ml-[19rem] pt-[4rem]">Add your skills</h1>
        <form action="">
          <div className="flex flex-row">
            <div className="ml-[19rem] mt-10">
              <div className="">
                <label name="full-name" className=" text-white text-lg">
                  Skill:
                </label>
                <br></br>
                <input
                  name="full-name"
                  type="text"
                  id="_skill"
                  size="30"
                  className="text-white mt-2 bg-secondary p-3 rounded-[10px] outline-none"
                ></input>
                <br></br>
              </div>
            </div>
            <div className="ml-[8rem] mt-10">
              <div>
                <label name="email" className=" text-white text-lg">
                  Level:
                </label>
                <br></br>
                <input
                  name="email"
                  type="text"
                  size="30"
                  id="_level"
                  className="text-white mt-2 bg-secondary p-3 rounded-[10px] outline-none"
                ></input>
                <br></br>
              </div>
            </div>
          </div>
          <button
            type="submit"
            id="_skill"
            onClick={addSkill}
            className="text-white text-xl mt-[3rem] ml-[19rem] rounded-[50px] bg-orange-btn hover:bg-secondary ease-in duration-100 w-[8rem] h-[3rem]"
          >
            Add
          </button>
        </form>
        {/* <button type="submit" onClick={showskill} id="btn_showskill" className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-secondary rounded-[30px]">SHOW</button> */}
      </div>
    </div>
  )
}
