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

   

      useEffect(() => {
        
        const handleData  = (data:any) => {
          setChats(old => {

              return old?.map(chat => chat.users[0]._id == data._id ? {
                ...chat,
                users:[{...data}]
              } :chat )

            
          })
       }
    
         socket?.on("user-connected", handleData)

         return () => {
          socket?.off("user-connected",handleData)
         } 

      },[socket])


      useEffect(() => {

        
        const handleData  = (data:any) => {
          setChats(old => {

              return old?.map(chat => chat.users[0]._id == data._id ? {
                ...chat,
                users:[{...data}]
              } :chat )

            
          })
       }
    
        socket?.on("user-disconnected", handleData)
    
         return () => {
          socket?.off("user-disconnected",handleData)
         } 
    
      },[socket])


   
    
      return {
        chats
      }

    
 }