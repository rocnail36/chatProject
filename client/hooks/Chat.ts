import { pFecth } from "@/lib"
import { User } from "next-auth"

import { useEffect, useRef, useState } from "react"



export const useChat = (id:string) => {


    const [message, setmessage] = useState([])
    const idUserFriend = useRef<string>()
    const idChat = useRef<string>()
    const getChat = async() => {
    const data = await pFecth("/chat/66a9916e938489c4437d1a9d","GET",undefined,"default",localStorage.getItem("token")|| "")
      setmessage(data.messages)
      idUserFriend.current = data.users.filter((user:{_id:string}) => user._id == id)[0]._id
      idChat.current = data.id
    }
    

    
  useEffect(() => {
    getChat()
  },[])


  return {
    message,
    idUserFriend,
    idChat
  }

}