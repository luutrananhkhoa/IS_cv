import React, { memo } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

/**
 * to Create ModalWarning
 * @param [openModal, setOpenModalModal]: [openModal: boolean, setOpenModalModal: React.Dispatch<React.SetStateAction<boolean>>]
 * @param title: string
 * @param content: string
 * @param action: function
 * @returns
 */
function ModalSuccess(props) {
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
          <div className="w-[40%] h-[60vh] bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-lg">
            <div className="bg-secondary p-[10px] h-[40%] rounded-t-lg relative">
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
              <h1 className="text-5xl mb-[1rem]">Success</h1>
              <p>{props.content ? props.content : ''}</p>
              <button
                className="mt-8 px-6 py-3 text-white bg-orange-btn rounded-[2rem]"
                onClick={() => {
                  props.action && props.action()
                  setOpenModal((e) => !e)
                }}
              >
                {props.title ? props.title : 'Go to homepage'}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default memo(ModalSuccess)
