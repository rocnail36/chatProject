import { pFecth } from "@/lib"
import { Message } from "@/types/Message"
import { User } from "next-auth"

import { useEffect, useRef, useState } from "react"



export const useChat = (id:string) => {


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


  return {
    message,
    idChat,
    setmessage
  }

}