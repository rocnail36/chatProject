import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const MessageItem = () => {
  return (
    <div className="flex items-center justify-between pr-4">
    <div className="flex">
      <Avatar className="overflow-hidden mr-4">
        <AvatarImage
          className="w-[50px] h-[50px] rounded-[50%]"
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="font-semibold">Jonh Doe</p>
        <p className="text-sm text-gray-800">Hola como estas ?</p>
      </div>
    </div>
    <div className="h-[20px] w-[20px] rounded-[50%] bg-green-400" />
  </div>
  )
}

export default MessageItem