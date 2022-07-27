import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { Web3Context } from '../../../Context/Web3ContextProvider'

const Index = () => {
  const [posts, setPosts] = useState()
  const { contractStudentBusiness, address } = useContext(Web3Context)
  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getRecruit(address)
        .call()
        .then((res) => setPosts(res))
        .catch((error) => console.log(error))
    }
  }, [contractStudentBusiness])
  return (
    <div className="min-h-screen min-w-full bg-primary pt-[4rem] pb-[8rem]">
      <div className="w-[60%] h-[100%] mx-auto pt-[2rem] bg-white rounded-md flex flex-col pb-10">
        <div className="w-full flex justify-end pr-[1rem]">
          <button className="h-[45px] w-[10rem] bg-orange-btn hover:bg-secondary rounded-[30px] ml-4 text-white text-xl">
            <Link to="/company/post" className="px-8">
              Add post
            </Link>
          </button>
        </div>
        <h1 className=" text-primary text-5xl text-center font-bold">My Post</h1>
        {posts &&
          posts[0]?.map(
            (item, index) =>
              item && (
                <div
                  key={item}
                  className="w-[90%] mx-auto h-[10rem] mt-6 p-6 bg-[#E7E7E7] rounded-md"
                >
                  <p className="font-[500] text-2xl">{posts?.[0][index]}</p>
                  <div className="flex justify-between">
                    <div className="flex justify-between mt-8">{posts?.[1][index]}</div>

                    {/* <button className=" w-[6rem] h-[2.5rem] mt-8  text-[1rem] text-white font-semibd text-center bg-orange-btn rounded-[2rem]"
                            >Delete</button> */}
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  )
}
export default Index
