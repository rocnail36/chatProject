"use client"
import { getSessionToken } from "@/actions";
import { useSession } from "next-auth/react";
import React,{ createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { TokenContex } from "./TokenProvider";

type props = {
    socket?: Socket,
   
    
}

export const SocketContext = createContext<props>({} as props)


type Props = {
    children: React.ReactNode
}

const SockectProvider = ({children}:Props) => {


   const [socket, setSocket] = useState<Socket>()
  
    const {isToken} = useContext(TokenContex)
   
   useEffect(() => {
   
    if(isToken){
        console.log("ae")
        setSocket(io(process.env.NEXT_PUBLIC_API!,{
            extraHeaders: {
                authorization: `bearer ${localStorage.getItem("token")}` 
            }
        }))
    }


   },[isToken])
    

    return(
        <SocketContext.Provider 
        value={{
            socket: socket,
        }}>

        {children}
        </SocketContext.Provider>
    )



}


export default SockectProvider