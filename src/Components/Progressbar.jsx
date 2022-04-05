import React from 'react'

export default function Progressbar(props) {
  return (
    <div className="w-[100%] text-xl font-bold">
        <div className="flex justify-between font-semibold">
              <span>{ props.title}</span>
              <span>{ props.per}%</span>
        </div>
        <div className="relative h-3 mt-1 w-[100%] bg-[#ccc]">
            <div className="absolute w-[70%] h-3 bg-secondary"></div>
        </div>
    </div>
  )
}
