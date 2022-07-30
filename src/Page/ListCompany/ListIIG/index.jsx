import React, { useEffect, useState, useContext } from 'react'
import { Web3Context } from '@context/Web3ContextProvider'
import _ from 'lodash'
import { Link } from 'react-router-dom'

export default function Index() {
  const { contractStudentBusiness, address } = useContext(Web3Context)
  const [listIIG, setListIIG] = useState()
  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getListIIG()
        .call({ from: address })
        .then((success) => {
          console.log(success)
          let arr = []
          _.forEach(success[0], (value, index) => {
            if (success[0][index] !== '') {
              arr.push({ address: success[0][index], name: success[1][index] })
            }
          })
          setListIIG(arr)
        })
        .catch((error) => console.log(error))
    }
  }, [contractStudentBusiness])
  return (
    <div className="w-[75%] flex flex-col mx-auto">
      <div className="pt-10">
        <h1 className="text-6xl text-white font-bold">IIG</h1>
      </div>
      <div className="mt-6 w-[100%] flex">
        <input
          type="text"
          className="py-3 px-6 w-full rounded-l-lg outline-none"
          placeholder="Company name"
        />
        <button className="py-3 px-6 bg-secondary text-white rounded-r-lg">Search</button>
      </div>
      <div className="mt-10 ">
        <div className="flex bg-secondary p-3 rounded-t-lg justify-between text-white text-xl">
          <p className="w-[40%]">Name</p>
          <p className="w-[60%]">Address</p>
        </div>
        {listIIG?.map((item, index) => (
          <Link key={index} to={`/iig?address=${item.address}`}>
            <div className="flex justify-between p-3 mt-4 text-white text-xl hover:bg-orange-btn cursor-pointer">
              <p className="w-[40%]">{item.name}</p>
              <p className="w-[60%]">{item.address}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
