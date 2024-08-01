"use client"
import React, { useEffect } from "react";
import { ArrowLeftCircle, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Header } from "@/components/layout";
import AvatarMessage from "@/components/pages/message/AvatarMessage";
import ImputMessage from "@/components/pages/message/ImputMessage";







const page = () => {

  

  useEffect(() => {
    
  fetch("http://localhost:8080/api/chat/66a9916e938489c4437d1a9d",{
    method:"GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
     },
     cache: "no-cache"
    
  })

  },[])



  return (
    <div className="bg-white max-w-2xl m-auto">
      <Header/>
      <Star
        className="fixed top-4 right-4 hover:cursor-pointer z-50"
        color="white"
        size={40}
        fill="white"
         
      />
      <ArrowLeftCircle className="fixed top-4 left-4 hover:cursor-pointer z-50" size={40} color="white"  />
   <AvatarMessage/>
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
   <ImputMessage/>
    </div>
  );
};

export default page;
