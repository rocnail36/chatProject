"use client"
import { Search } from '@/components/forms'
import React, { useContext, useEffect, useState } from 'react'
import  { SocketContext } from '@/providers/SocketProvider'
import { getSessionToken } from '@/actions'
import { pFecth } from '@/lib'
import MessageItem from '@/components/pages/app/MessageItem'
import { Button } from '@/components/ui/button'
import { signOut } from "next-auth/react"

const Page = ({searchParams}:{
  params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
  

 const {setToken,socket} = useContext(SocketContext)
  
  const getTokenFromSession = async() => {
    const token = await getSessionToken()
    if(!token) return
    setToken(token)
    localStorage.setItem("token",token)
  }

  const {input} = searchParams
  
 

  const [chats,setChats] = useState<any[]>()

  useEffect(() => {
    if(socket) return
    getTokenFromSession()
  },[])

  useEffect(() => {
    pFecth(`/user/chats${input ? `/${input}`: ""}`,"GET",undefined,"no-cache")
    .then(result => setChats(result.chats))
  },[input,socket])

  useEffect(() => {

    const handleData = (data:any) => {
      setChats(data)
    }

    socket?.on("sendChat:server",handleData)

    return () => {
      socket?.off("sendChat:server",handleData)
    }
    
  },[socket])


  return (
    <div className='m-auto px-4 pt-[140px] pb-[80px] relative h-[100vh] bg-white'>
         <Search input='' />
        
        <h4 className='mb-2 text-gray-800 text-sm'>CHATS</h4>
       
        <div className="flex flex-col gap-8">
        {chats?.map(chat => (
          <MessageItem message={chat?.message_id[0]} key={chat.users[0]?._id} user={chat.users[0]}   />
        ))}
        </div>
        <Button onClick={() => {
          localStorage.removeItem("token")
          signOut()
        }} className='absolute top-4 right-[5px] z-50 bg-white rounded-[20px] text-[14px] hover:scale-105 transition-all'>salir</Button>
    </div>
  )
}

export default Page