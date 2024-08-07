"use client"

import { getUsersContacts } from "@/actions";
import { Search } from "@/components/forms";
import ContactItem from "@/components/pages/contact/ContactItem";
import { SocketContext } from "@/providers/SocketProvider";
import { User } from "@/types";
import React, { useContext, useEffect, useState } from "react";

const Page = ({
  searchParams,
}: {
  searchParams: {
    input: string;
  };
}) => {

  const {socket} = useContext(SocketContext)
  let InputSearch = searchParams.input ?? "";
  const [users, setusers] = useState<any[]>([]);


  useEffect(() => {
    getUsersContacts(InputSearch)
      .then((res) => {
       
        setusers(res)
      })
      .catch((err) => console.log(err));
  }, [InputSearch]);
  
  useEffect(() => {

    const handleData  = (data:any) => {
      console.log("se conecto un usario")
      console.log(data)
      setusers(old => old?.map(user => user._id == data._id ? data : user))
     }

     socket?.on("user-connected",handleData)
     return () => {
      socket?.off("user-connected",handleData)
     } 
  },[socket])

  useEffect(() => {

    const handleData = (data:any) => {
   
      setusers(old => old?.map(user => user._id == data._id ? data : user))
     }

    socket?.on("user-disconnected", handleData)

     return () => {
      socket?.off("user-disconnected",handleData)
     } 

  },[socket])

  
  useEffect(() => {

    const handleData  = (data:any) => {
      setusers(old => [data,...old])
     }

    socket?.on("newUserConnected:server",handleData)

    return () => {
      socket?.off("newUserConnected:server",handleData)
    }


  },[socket])



  return (
    <div className="m-auto h-[100vh] pt-[100px] bg-white overflow-y-hidden">
      <Search input={InputSearch} />

    
      <div className="h-[95%] pt-[20px] overflow-y-scroll scrollbar-hide">
        {users?.map((user) => (
          <ContactItem key={user._id} {...user} />
        ))}
      </div>

     
    </div>
  );
};

export default Page;
