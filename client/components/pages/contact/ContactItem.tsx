import { Avatar, AvatarImage,AvatarFallback } from '@radix-ui/react-avatar'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



type props = {
  id:string
  name:string,
  status: string
}

const ContactItem = ({name,id, status}:props) => {


  
  const pathName = usePathname()
  
  console.log(pathName)

  return (
    <Link href={`/message/${id}`}>
    <div className='flex justify-between items-center px-4 py-4 border-solid border-y-[1px] border-gray-200 cursor-pointer border-collapse'>
    <div className='flex items-center'>
    <Avatar className="overflow-hidden mr-4 w-[50px] h-[50px]">
   <AvatarImage
     className="w-[50px] h-[50px] rounded-[50%]"
     src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
     alt="@shadcn"
   />
   
   </Avatar>
   <p>{name}</p>
    </div>
   <div className={`h-[20px] w-[20px] rounded-[50%]  ${clsx({"bg-green-400": status == "connected", "bg-red-400": status == "offline"})}  bg-green-400`} />
       </div>
       </Link>
  )
}

export default ContactItem