import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const AvatarMessage = ({name}:{name?:string}) => {
  return (
    <div className="fixed top-14 left-[50%] translate-x-[-50%] flex items-center gap-4 z-50">
    <Avatar className="overflow-hidden flex  justify-center">
      <div className='w-[50px] h-[50px]'>
      <AvatarImage
        className="w-[50px] h-[50px] rounded-[50%] bg-white"
        src="/profile.webp"
        alt="@shadcn"
      />
      </div>
    </Avatar>
    <p className="text-white text-lg min-w-4">{name}</p>
  </div>
  )
}

export default AvatarMessage