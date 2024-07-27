import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const ImpotantItem = () => {
  return (
    <Avatar className='overflow-hidden'>
    <AvatarImage className='w-[45px] h-[45px] rounded-[50%]' src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  )
}

export default ImpotantItem