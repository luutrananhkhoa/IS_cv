import React from 'react'
import Header from '../Components/Header'

export default function Createcv() {
  return (
      <>
          <Header />
          <div className="w-full min-h-screen bg-primary ">
            <h1 className="text-left ml-[200px] text-4xl text-white font-bold pt-[3rem]">CREATE MY CV</h1>
            <form action="#" className="ml-[200px] mt-[2rem]">
              <div className="flex"> 
                  <div className="mt-6">
                    <label name="fname" className="text-white">Full name</label><br/>
                    <input type="text" name="fname" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Full name"/>
                  </div>
                  <div className="mt-6 ml-[4rem]">
                    <label name="birthday" className="text-white">Date of birth</label><br/>
                    <input type="date" name="birthday" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Email"/>
                  </div>
              </div>
              <div className="flex">
                <div className="mt-6" >
                  <label name="mail" className="text-white">Email</label><br/>
                  <input type="email" name="mail" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Email"/>
                </div>
                <div className="ml-[4rem]">
                <div className="mt-6" >
                  <label name="prof" className="text-white">Professional title</label><br/>
                  <input type="text" name="prof" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Professional title"/>
                </div>
                </div>
              </div>
              <div className="flex">
                <div className="mt-6" >
                  <label name="github" className="text-white">Github</label><br/>
                  <input type="text" name="github" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Github"/>
                </div>
                <div className="mt-6 ml-[4rem]">
                  <label name="linkedIn" className="text-white">LinkedIn</label><br/>
                  <input type="text" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="LinkedIn"/>
                </div>
              </div>
              <div className="flex">
                <div className="mt-6" >
                  <label name="address" className="text-white">Address owner</label><br/>
                  <input type="text" name="address" className="h-10 w-[20rem] p-4 rounded-[5px] outline-none" placeholder="Github"/>
                </div>
              </div>
              <button type="submit" className="h-[2.75rem] w-[8rem] mt-8 text-white font-medium bg-secondary rounded-[30px]">CREATE</button>
            </form>
          </div>
    </>
  )
}
