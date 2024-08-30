"use client"

const {createContext, useState} = require("react")
export const  UserContext = createContext(null);
export const UserContextProvider = ({children})=>{
    const [userInfo,setuserInfo] = useState({firstname:"Ner",})
    return(
        <UserContext.Provider value={{userInfo,setuserInfo}}>
            {children}
        </UserContext.Provider>

    )
}