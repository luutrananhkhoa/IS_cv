import React, { memo } from 'react'
import { IoMdWarning } from 'react-icons/io'

/**
 * to Create ModalWarning
 * @param [openModal, setOpenModal]: [openModal: boolean, setOpenModal: React.Dispatch<React.SetStateAction<boolean>>]
 * @param title: string
 * @param content: string
 * @param action: function
 * @returns
 */
function ModalWarning(props) {
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
          <div className="w-[30%] h-[60vh] bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-lg">
            <div className="bg-secondary pt-[10px] h-[40%] rounded-t-lg relative">
              <strong
                onClick={() => {
                  setOpenModal((e) => !e)
                }}
                className="text-4xl text-white absolute top-0 right-2 align-center cursor-pointer alert-del"
              >
                &times;
              </strong>
              <IoMdWarning className="text-[6rem] text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
            <div className="flex flex-col items-center justify-center mt-[2rem]">
              <h1 className="text-5xl mb-[1rem]">Warning!</h1>
              <p className="w-[70%] text-center">{props.content ? props.content : ''}</p>
            </div>
            <div className="flex justify-center mt-10 bottom-0">
              <button
                className="w-[50%] h-[3rem] flex justify-center items-center text-xl text-white bg-orange-btn all ease-in"
                onClick={() => {
                  props.action && props.action()
                  setOpenModal((e) => !e)
                }}
              >
                {props.title ? props.title : 'OK'}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default memo(ModalWarning)
