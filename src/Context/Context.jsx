import { createContext, useState } from "react"

export const Context=createContext()

const ContextProvider = ({children})=>{
    const [skills, setSkills]= useState({})
    const [addr, setAddr]= useState()
    const data = {skills, setSkills, addr, setAddr}
    
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider