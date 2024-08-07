"use client"

import { getUsersContacts } from "@/actions";
import { Search } from "@/components/forms";
import ContactItem from "@/components/pages/contact/ContactItem";
import { useContact } from "@/hooks/useContacts";
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
  const {contacts} = useContact(InputSearch,socket)



  return (
    <div className="m-auto h-[100vh] pt-[100px] bg-white overflow-y-hidden">
      <Search input={InputSearch} />

    
      <div className="h-[95%] pt-[20px] overflow-y-scroll scrollbar-hide">
        {contacts?.map((user) => (
          <ContactItem key={user._id} {...user} />
        ))}
      </div>

     
    </div>
  );
};

export default Page;
