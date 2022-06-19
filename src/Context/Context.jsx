import { createContext, useState } from "react"

export const Context=createContext()

const ContextProvider = ({children})=>{
    const [skills, setSkills]= useState({})
    const [address, setAddress]= useState()
    const data = {skills, setSkills, address, setAddress}
    
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider