import react, { useContext, useEffect } from 'react'
import HeaderCompany from './../Components/HeaderCompany'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context/Context'
import StudentApply from './StudentApply'
import _ from 'lodash'
import { Web3Context } from '../Context/Web3ContextProvider'

const Employee = () => {
  const { listStudent, setListStudent } = useContext(Context)
  const { contractStudentBusiness, address } = useContext(Web3Context)

  useEffect(() => {
    if (contractStudentBusiness) {
      contractStudentBusiness.methods
        .getListCV(address)
        .call()
        .then((res) => {
          if (parseInt(res._hex)) return
          let temp = []
          for (let i = 0; i < res[0].length; i++) {
            let isNew = true
            _.forEach(temp, function (value) {
              if (value.address === res[0][i]) {
                isNew = false
                value.title.push(res[3][i])
                console.log(res[3][i])
                return
              }
            })
            if (isNew) temp.push({ address: res[0][i], title: [res[3][i]] })
          }
          setListStudent(temp)
        })
        .catch((err) => console.log(err))
    }
  }, [contractStudentBusiness])

  return (
    <>
      <HeaderCompany />
      <div className="min-h-screen min-w-full bg-primary pb-[8rem]">
        <h1 className="text-center text-5xl pt-10 font-semibold text-white">EMPLOYEE</h1>
        <div className="w-[70%] h-[100%] mx-auto pt-[4rem] flex flex-col justify-center pb-[4rem]">
          <div className="mt-6 w-[80%] flex justify-center mx-auto">
            <input
              type="text"
              className="py-3 px-6 w-full rounded-l-lg outline-none"
              placeholder="Employee name"
            />
            <button className="py-3 px-6 bg-secondary text-white rounded-r-lg">Search</button>
          </div>
          <div className="w-[80%] mx-auto mt-8">
            <div className="flex bg-secondary p-3 rounded-t-lg justify-between text-white text-xl">
              <p className="w-[40%]">Name</p>
              {/* <p className="w-[40%]">Position</p> */}
            </div>
            {listStudent?.map((item, index) => (
              <StudentApply key={index} address={item.address} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Employee
