import React, { useState, useEffect } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import avt from '@asset/avt_illu.jpg'
import { uploadAvatar } from '@api/company/profile'
import Progressbar from '@component/Progressbar'

export default function Index(props) {
  const [openModal, setOpenModal] = props.state
  const { address, avatar, setAvatar } = props
  const [image, setImage] = useState()
  const [progress, setProgress] = useState(0)
  const handleSubmit = () => {
    if (!image) return
    const fd = new FormData()
    fd.append('address', address)
    fd.append('avatar', image)
    uploadAvatar(fd, setProgress)
      .then((success) => {
        setAvatar(image)
        setOpenModal((e) => !e)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    setProgress(0)
    setImage()
  }, [openModal])
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
          <div className="w-[40%]  h-[400px] bg-white fixed left-[50%] top-[10%]  translate-x-[-50%] z-10 rounded-lg">
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
                  className="h-[160px] w-[160px] rounded-md block object-cover"
                  alt="img"
                  src={
                    image !== undefined
                      ? URL.createObjectURL(image)
                      : avatar
                      ? URL.createObjectURL(avatar)
                      : avt
                  }
                ></img>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full  p-4 text-sm rounded-[8px]"
                />
              </div>
              <div className="w-[90%]">
                <Progressbar title="...upload" percent={progress}></Progressbar>
              </div>
              <button
                className=" px-6 py-3 text-white bg-orange-btn rounded-[2rem]"
                onClick={() => {
                  handleSubmit()
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
