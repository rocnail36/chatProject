"use client"
import React, { useEffect, useState } from "react";
import { ArrowLeftCircle, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Header } from "@/components/layout";
import AvatarMessage from "@/components/pages/message/AvatarMessage";
import ImputMessage from "@/components/pages/message/ImputMessage";
import { pFecth } from "@/lib";
import { User } from "@/types";
import { useChat } from "@/hooks/Chat";
import { useRouter } from "next/navigation";







const page = ({params}:{ params: { id: string , name:string} }) => {

  
  const { id,name} = params
  const router = useRouter()
  const {message,idUserFriend,idChat} = useChat(id)
  
  return (
    <div className="bg-white max-w-2xl m-auto relative">
      <Header/>
      <Star
        className="absolute top-4 right-4 hover:cursor-pointer z-50"
        color="white"
        size={40}
        fill="white"
         
      />
      <ArrowLeftCircle onClick={(() => router.back())} className="absolute top-4 left-4 hover:cursor-pointer z-50" size={40} color="white"  />
   <AvatarMessage name={name}/>
   <div className="h-[100vh] w-[100%] pt-[120px] pb-[80px] relative z-0 flex flex-col justify-end px-6 gap-2">
   <div className="self-start bg-gray-400 px-4 py-2 rounded-[20px]">
      <p>Hola como estas ?</p>
    </div>
   <div className="self-start bg-gray-400 px-4 py-2 rounded-[20px]">
      <p>saludos a Linkedin!</p>
    </div>
    <div className="self-end bg-blue-300 px-4 py-2 rounded-[20px]">
      <p>Saludos a Linkedin !</p>
    </div>
  
   </div>
   <ImputMessage idChat={idChat.current} idUserFriend={idUserFriend.current}/>
    </div>
  );
};

export default page;
