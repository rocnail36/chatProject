import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const ContactItem = async() => {





  return (
    <div className='flex justify-between items-center px-4 py-4 border-solid border-y-[1px] border-gray-200 cursor-pointer border-collapse'>
    <div className='flex items-center'>
    <Avatar className="overflow-hidden mr-4 w-[50px] h-[50px]">
   <AvatarImage
     className="w-[50px] h-[50px] rounded-[50%]"
     src="https://github.com/shadcn.png"
     alt="@shadcn"
   />
   
   </Avatar>
   <p>John Doe</p>
    </div>
   <div className="h-[20px] w-[20px] rounded-[50%] bg-green-400" />
       </div>
  )
}

export default ContactItem