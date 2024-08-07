"use client"
import React, {  useContext, useEffect, useLayoutEffect, useRef,   } from "react";
import { ArrowLeftCircle} from "lucide-react";
import { Header } from "@/components/layout";
import AvatarMessage from "@/components/pages/message/AvatarMessage";
import ImputMessage from "@/components/pages/message/ImputMessage";
import { useChat } from "@/hooks/useChat";
import { useRouter } from "next/navigation";
import { SocketContext } from "@/providers/SocketProvider";
import Message from "@/components/pages/message/Message";
import {  Message as TMessage } from "@/types/Message";




const Page = ({params}:{ params: { id: string , name:string} }) => {

  
  const { id,name} = params
  const router = useRouter()
  const {message,idChat,setmessage} = useChat(id)
  const {socket} = useContext(SocketContext)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    socket?.on("sendMessage:server",(data) => {
    setmessage(data)
    })
  return () => {
  }
},[socket])

  useLayoutEffect(() => {
      container.current?.scrollIntoView()
  },[message])


  
  return (
    <div className="bg-white max-w-2xl m-auto relative">
      <Header/>
     
   <ArrowLeftCircle onClick={(() => router.back())} className="absolute top-4 left-4 hover:cursor-pointer z-50" size={40} color="white"  />
   <AvatarMessage name={name}/>
   <div className="h-[100vh] overflow-y-scroll min-h-[0px] pb-[80px] scrollbar-hide grid  items-end">
   <div className="w-[100%] mt-[125px]  relative z-0 px-6 gap-[1px] flex flex-col ">
      {message?.map((message : TMessage) => (
        <Message key={message._id} text={message.text} userfriendId={id} user_id={message.user_id}/>
      ))}
      <div className="h-[1px]" ref={container}></div>
   </div>
   </div>
   <ImputMessage idChat={idChat.current} idUserFriend={id} setMessage={setmessage}/>
    </div>
  );
};

export default Page;
