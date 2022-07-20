import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

export default function Index(props) {
  const [openModal, setOpenModal] = props.state
  return (
    <>
      {openModal && (
        <>
          <div
            className="w-[100vw] h-[100vh] top-0 fixed bg-slate-700 z-[8] opacity-60"
            onClick={() => {
              setOpenModal((e) => !e)
            }}
          ></div>
          <div className="w-[40%]  h-[500px] bg-white fixed left-[50%] top-[20px]  translate-x-[-50%] z-10 rounded-lg">
            <div className="bg-secondary p-[10px] h-[100px] rounded-t-lg relative">
              <strong
                onClick={() => {
                  setOpenModal((e) => !e)
                }}
                className="text-4xl text-white absolute top-0 right-2 align-center cursor-pointer alert-del"
              >
                &times;
              </strong>
              <BsCheck2Circle className="text-[6rem] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
            <div className="flex flex-col items-center justify-center mt-[2rem]">
              <div className="flex justify-between">
                <img
                  className="w-[200px] h-[200px] "
                  alt="img"
                  src={
                    'https://vcdn-giaitri.vnecdn.net/2022/04/28/Avatar-2-James-Cameron-5081-1651112580.jpg'
                  }
                ></img>
              </div>
              <button
                className=" px-6 py-3 text-white bg-orange-btn rounded-[2rem]"
                onClick={() => {
                  setOpenModal((e) => !e)
                }}
              >
                Oke
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
