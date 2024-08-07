"use client"
import { useToken } from "@/hooks/useToken";
import { createContext } from "react";



export const TokenContex = createContext<{isToken:boolean,setTokenStorageFromSession:() => Promise<void>}>({} as any)





export const TokenProvider = ({children}:{children:React.ReactNode}) => {


  const {isToken,setTokenStorageFromSession} = useToken()




  return (
    <TokenContex.Provider value={{
        isToken,
         setTokenStorageFromSession
    }}>
        {children}
    </TokenContex.Provider>
  )


  





}
