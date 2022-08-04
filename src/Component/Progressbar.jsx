import React from 'react'

export default function Progressbar(props) {
  var { title, percent } = props
  return (
    <div className="w-[100%] text-xl font-bold">
      <div className="flex justify-between font-semibold">
        <span>{title || 'No Title'}</span>
        {/* <span>{percent || 0}%</span> */}
      </div>
      <div className="relative h-3 mt-1 w-[100%] bg-[#ccc]">
        <div className={`absolute w-[${percent}%] h-3 bg-secondary`}></div>
      </div>
    </div>
  )
}
