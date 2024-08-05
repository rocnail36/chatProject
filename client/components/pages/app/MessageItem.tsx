import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'



type Props = {
  user: {name:string,status:string,_id:string},
  message?: {text:string}
}

const MessageItem = ({user,message}:Props) => {
  

  if(!user) return

  const {name,status,_id} =user
  return (
    <Link href={`/message/${_id}/${name}`}>
    <div className="flex items-center justify-between pr-4">
    <div className="flex">
      <Avatar className="overflow-hidden mr-4">
        <div className='w-[50px] h-[50px]'>
        <AvatarImage
          className="w-[50px] h-[50px] rounded-[50%]"
          src="/profile.webp"
          alt="@shadcn"
        />
        </div>
      </Avatar>
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-800">{message?.text}</p>
      </div>
    </div>
    <div className={`h-[20px] w-[20px] rounded-[50%] ${clsx({"bg-green-400": status == "connected", "bg-red-400": status == "offline"})}`} />
  </div>
  </Link>
  )
}

export default MessageItem