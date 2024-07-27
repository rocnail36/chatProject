import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import MessageItem from "./MessageItem";

const ListMessage = () => {
  return (
    <div className="flex flex-col gap-8">
     
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      <MessageItem/>
      
    </div>
  );
};

export default ListMessage;
