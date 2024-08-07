import { pFecth } from "@/lib"
import { useEffect, useState } from "react"
import { Socket } from "socket.io-client"



type Props = {
   socket: Socket | undefined
   input:string | string[] | undefined
   isToken:boolean
}


 export const useChats = ({socket,input,isToken}:Props) => {

    const [chats,setChats] = useState<any[]>()

    useEffect(() => {
        console.log("a")
        pFecth(`/user/chats${input ? `/${input}`: ""}`,"GET",undefined,"no-cache")
        .then(result => setChats(result.chats))
      },[input,socket,isToken])



      useEffect(() => {

        const handleData = (data:any) => {
          setChats(data)
        }
    
        socket?.on("sendChat:server",handleData)
    
        return () => {
          socket?.off("sendChat:server",handleData)
        }
      },[socket])
    
      return {
        chats
      }

    
 }