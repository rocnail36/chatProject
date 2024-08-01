"use client"
import React,{ createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type props = {
    socket?: Socket,
    setToken: Dispatch<SetStateAction<string|undefined>>
    token:string|undefined
}

export const SocketContext = createContext<props>({} as props)


type Props = {
    children: React.ReactNode
}

const SockectProvider = ({children}:Props) => {

    const get = () => {

        if (typeof window !== 'undefined') {
            return localStorage.getItem("token")|| undefined
        }
     
    }

   const [socket, setSocket] = useState<Socket>()
   const  [token, setToken] = useState<string|undefined>(get())
   let  tokenTransport: string | undefined



   useEffect(() => {
    if(token){
        setSocket(io("http://localhost:8080",{
            extraHeaders: {
                authorization: `bearer ${token}` 
            }
        }))

    }
   },[token])
    


    return(
        <SocketContext.Provider 
        value={{
            socket: socket,
            setToken: setToken,
            token:token
        }}>

        {children}
        </SocketContext.Provider>
    )



}


export default SockectProvider