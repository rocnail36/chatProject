import { pFecth } from "@/lib"
import { Message } from "@/types/Message"
import { User } from "next-auth"

import { useEffect, useRef, useState } from "react"
import { Socket } from "socket.io-client"



export const useChat = (id:string,socket:Socket|undefined) => {


    const [message, setmessage] = useState<Message[]>([])

    const idChat = useRef<string>()
    
    const getChat = async() => {

    const data = await pFecth(`/chat/${id}`,"GET",undefined,"no-cache")
  
    setmessage(data.message_id)

      idChat.current = data.id
    }
    
    
    
  useEffect(() => {
 
    getChat()
  },[])


  useEffect(() => {
    socket?.on("sendMessage:server",(data) => {
    setmessage(data)
    })
  return () => {
  }
},[socket])


  return {
    message,
    idChat,
    setmessage
  }

}