import { createContext, useState } from "react"

export const Context=createContext()

const ContextProvider = ({children})=>{
    const [profile, setProfile] = useState({
        Birthday: "",
        Email: "",
        Github: "",
        Linked: "",
        Name: "",
        ProfessionalTitle: "",
      })
    const [skills, setSkills]= useState({})
    const [addressTemp, setAddressTemp] = useState()
    const [listCompany, setListCompany]= useState({})
    const [addr, setAddr]= useState()
    const [addrCompany, setAddrCompany]= useState()
    const [status, setStatus]= useState(false)
    const data = {skills, setSkills, addr, setAddr, addrCompany, setAddrCompany, status, 
                    setStatus, listCompany, setListCompany, profile, setProfile,
                    addressTemp, setAddressTemp}
    
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider