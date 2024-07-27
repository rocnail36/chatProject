"use client"
import clsx from 'clsx'
import { Contact,Bed, Sun, ArrowLeft } from 'lucide-react'
import { useRouter,usePathname } from 'next/navigation'
import React from 'react'

const Bar = () => {
    const path = usePathname()
   
    console.log(path)
  return (
    <div className='h-[50px] fixed bottom-8 left-[50%] translate-x-[-50%] bg-gray-200 rounded-[20px] flex justify-center items-center gap-4 px-8 transition-all'>
           
           { path == "/app/contacts" ? 
           ( 
               <ArrowLeft className='hover:cursor-pointer hover:scale-105 transition-all duration-100'/> 
        ):
            (
                <>
                 <Bed className='hover:cursor-pointer hover:scale-105 transition-all duration-100'/>
                <Contact  className='hover:cursor-pointer hover:scale-105 transition-all duration-100'/>
                <Sun className='hover:cursor-pointer hover:scale-105 transition-all duration-100'/>
                </>
            )}
           
    </div>
  )
}

export default Bar