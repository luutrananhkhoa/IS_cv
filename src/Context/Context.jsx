import { createContext, useState } from 'react'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    Birthday: '',
    Email: '',
    Github: '',
    Linked: '',
    Name: '',
    ProfessionalTitle: '',
  })
  const [profileBusiness, setProfileBusiness] = useState({
    AddressCompany: '',
    Name: '',
    Country: '',
    Linked: '',
    Website: '',
    Facebook: '',
    FocusArea: '',
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [job, setJob] = useState({
    title: '',
    desc: '',
  })
  const [skills, setSkills] = useState({})
  const [posts, setPosts] = useState({})
  const [addressTemp, setAddressTemp] = useState()
  const [listCompany, setListCompany] = useState({})
  const [listStudent, setListStudent] = useState([])
  const [addr, setAddr] = useState()
  const [addrCompany, setAddrCompany] = useState()
  const [jobTitle, setJobTitle] = useState()
  const [existAccount, setExistAccount] = useState(false)
  const [statusB, setStatusB] = useState(false)
  const data = {
    skills,
    setSkills,
    addr,
    setAddr,
    addrCompany,
    setAddrCompany,
    existAccount,
    setExistAccount,
    listCompany,
    setListCompany,
    profile,
    setProfile,
    addressTemp,
    setAddressTemp,
    profileBusiness,
    setProfileBusiness,
    listStudent,
    setListStudent,
    posts,
    setPosts,
    job,
    setJob,
    statusB,
    setStatusB,
    jobTitle,
    setJobTitle,
    isLoggedIn,
    setIsLoggedIn,
  }

  return <Context.Provider value={data}>{children}</Context.Provider>
}

export default ContextProvider
