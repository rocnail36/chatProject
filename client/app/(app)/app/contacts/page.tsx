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
  const [users, setusers] = useState<User[]>([]);


  useEffect(() => {
    getUsersContacts(InputSearch)
      .then((res) => {
       
        setusers(res)
      })
      .catch((err) => console.log(err));
  }, [InputSearch]);
  
  useEffect(() => {
     socket?.on("user-connected",(data) => {
      setusers(old => old?.map(user => user.id == data.id ? data : user))
     })
     return () => {
      socket?.off("user-connected")
     } 
  },[socket])

  useEffect(() => {
    socket?.on("user-disconnected",(data) => {
   
      setusers(old => old?.map(user => user.id == data.id ? data : user))
     })
     return () => {
      socket?.off("user-disconnected")
     } 

  },[socket])



  return (
    <div className="m-auto h-[100vh] pt-[140px]">
      <Search input={InputSearch} />

      <div className="mt-4">
        {users?.map((user: User) => (
          <ContactItem key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Page;
