"use client"
import { Search } from '@/components/forms'
import React, { useContext, useEffect, useState } from 'react'
import  { SocketContext } from '@/providers/SocketProvider'
import MessageItem from '@/components/pages/app/MessageItem'
import { Button } from '@/components/ui/button'
import { signOut } from "next-auth/react"
import { useChats } from '@/hooks/useChats'
import { TokenContex,  } from '@/providers/TokenProvider'

const Page = ({searchParams}:{
  params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
  

    const {input} = searchParams
    const {isToken,setTokenStorageFromSession} = useContext(TokenContex)
    const {socket} = useContext(SocketContext)
    const {chats} = useChats({socket,input,isToken})


    useEffect(() => {
     if(!isToken){
      setTokenStorageFromSession()
     }
    },[])





    console.log(chats)

  return (
    <div className='m-auto px-4 pt-[140px] pb-[80px] relative h-[100vh] bg-white'>
         <Search input='' />
        
        <h4 className='mb-2 text-gray-800 text-sm'>CHATS</h4>
       
        <div className="flex flex-col gap-8 overflow-y-scroll h-[100%] scrollbar-hide ">
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