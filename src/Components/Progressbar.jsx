import React from 'react'

export default function Progressbar(props) {
  var temp = parseInt(props?.per)
  // console.log(temp)
  return (
    <div className="w-[100%] text-xl font-bold">
      <div className="flex justify-between font-semibold">
        <span>{props?.title || 'No Title'}</span>
        <span>{props?.per || 0}%</span>
      </div>
      <div className="relative h-3 mt-1 w-[100%] bg-[#ccc]">
        <div className={`absolute w-[${temp}%] h-3 bg-secondary`}></div>
      </div>
    </div>
  )
}
