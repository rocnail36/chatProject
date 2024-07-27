import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const AvatarMessage = () => {
  return (
    <div className="fixed top-14 left-[50%] translate-x-[-50%] flex items-center gap-4 z-50">
    <Avatar className="overflow-hidden flex  justify-center">
      <AvatarImage
        className="w-[50px] h-[50px] rounded-[50%]"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <p className="text-white text-lg">John Doe</p>
  </div>
  )
}

export default AvatarMessage