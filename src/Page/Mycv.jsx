import React from 'react'
import Header from '../Components/Header'
import avt from '../assets/avt.jpg'
import { IoMdMail } from 'react-icons/Io'
import { BsGithub, BsFillCalendar2DateFill, BsLinkedin } from 'react-icons/Bs'
import Progressbar from '../Components/Progressbar'
import { contract } from './../Api/Const'
import Pdf from 'react-to-pdf'

const ref = React.createRef()

const Mycv = () => {
  //Progress Bar
  const skills = [
    {
      title: 'HTML',
      per: '50',
    },
  ]

  var web3 = new Web3(Web3.providers.HttpProvider('http://localhost:7545'))

  web3.eth.getAccounts().then(console.log)
  var myContract = new web3.eth.Contract(contract, '0x1BE446b55b940a9ce9798E5FfD68A061EB026ee9')
  myContract.methods
    .getBalance()
    .call()
    .then((result) => console.log(result.toString()))

  myContract.methods
    .getProfile(0)
    .call()
    .then(function (res) {
      console.log(res)
      $('#text-name').html(res[0].toString())
      $('#text-birthday').html(res[1].toString())
      $('#text-proTitle').html(res[2].toString())
      $('#text-mail').html(res[3].toString())
      $('#text-github').html(res[4].toString())
      $('#text-linkedln').html(res[5].toString())
    })

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-primary pb-[120px]">
        <div className="flex justify-around items-center mb-3">
          <h1 className="font-bold text-2xl text-white ">My CV</h1>
          <Pdf targetRef={ref} filename="post.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="h-[45px] w-[140px] bg-secondary rounded-[30px] text-white text-xl"
              >
                Save
              </button>
            )}
          </Pdf>
        </div>
        <div id="savecv" ref={ref} className="w-[60%] h-[200vh] mx-auto bg-white flex">
          <div className="w-[30%] flex flex-col">
            <img
              src={avt}
              className="h-[160px] w-[160px] mx-auto mt-12 rounded-[50%] block object-cover"
            />
            <div className="p-2 ml-4 mt-6 flex flex-col gap-4">
              <div className="flex items-center">
                <div className="w-[2rem] h-[2rem]">
                  <IoMdMail size="2rem" className="text-secondary" />
                </div>
                <p id="text-mail" className="pl-2 flex-1 w-[70%] break-words"></p>
              </div>
              <div className=" flex items-center">
                <div className="w-[2rem] h-[2rem]">
                  <BsFillCalendar2DateFill size="2rem" className="text-secondary" />
                </div>
                <p id="text-birthday" className="pl-2 flex-1 w-[80%] break-words"></p>
              </div>
              <div className="flex items-center">
                <div className="w-[2rem] h-[2rem]">
                  <BsLinkedin size="2rem" className="text-secondary block " />
                </div>
                <p id="text-linkedln" className="pl-2 flex-1 w-[80%] break-words">
                  https://www.linkedin.com/in/luu-tran-anh-khoa-07914822a/
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-[2rem] h-[2rem]">
                  <BsGithub size="2rem" className="text-secondary" />
                </div>
                <p id="text-github" className="pl-2 flex-1 w-[80%] break-words"></p>
              </div>
            </div>
            <div className="mt-[4rem] ml-6">
              <h1 className="font-bold text-3xl">SKILLS</h1>
              <hr className="w-[90%] h-[2px] mt-4 border-0 bg-primary" />
              <div className="mt-4 w-[85%]">
                <Progressbar title={skills[0]?.title} per={skills[0]?.per} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-[10rem] mt-12 bg-secondary">
              <div className="ml-6 pt-6 text-white">
                <h1 id="text-name" className="text-4xl font-bold"></h1>
                <span id="text-proTitle" className="text-[1.3rem] mt-4"></span>
                <hr className="w-[40%] h-[2px] mt-4 border-0 bg-white" />
              </div>
            </div>
            <div className="text-primary">
              <div className="mt-[2rem] ml-4">
                <h1 className=" text-2xl font-bold ">EDUCATION</h1>
                <hr className="w-[90%] h-[3px] border-0 bg-primary" />
                <div>
                  <h1 className="font-bold text-[1.5rem] mt-3 ml-2">
                    University of Information Technology
                  </h1>
                  <h2 className="ml-6 font-semibold text-xl">Information System</h2>
                  <div className="ml-8">
                    <span>08/2019</span> - <span>present</span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="mt-[3rem] ml-4 ">
                <h1 className="text-2xl font-bold text-primary ">WORK EXPERIENCE</h1>
                <hr className="w-[90%] h-[3px] border-0 bg-primary" />
              </div>
              <div className="mt-[3rem] ml-4 ">
                <h1 className="text-2xl font-bold text-primary ">CERTIFICATES</h1>
                <hr className="w-[90%] h-[3px] border-0 bg-primary" />
              </div>
              <div className="mt-[3rem] ml-4 ">
                <h1 className="text-2xl font-bold text-primary ">PERSONAL PROJECTS</h1>
                <hr className="w-[90%] h-[3px] border-0 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mycv
