"use client"
import clsx from 'clsx'
import { Contact,Bed, Sun, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter,usePathname } from 'next/navigation'
import React from 'react'

const Bar = () => {
    const path = usePathname()
    const router = useRouter()
   
  
  return (
    <div className='h-[50px] fixed bottom-8 left-[50%] translate-x-[-50%] bg-gray-200 rounded-[20px] flex justify-center items-center gap-4 px-8 transition-all'>
           
           { path == "/app/contacts" ? 
           ( 
               <ArrowLeft onClick={() => router.back() } className='hover:cursor-pointer hover:scale-105 transition-all duration-100'/> 
        ):
            (
                <>
                 <Bed className='hover:cursor-pointer hover:scale-105 transition-all duration-100'/>
                 <Link href={'/app/contacts'}>
                <Contact  className='hover:cursor-pointer hover:scale-105 transition-all duration-100'/>
                </Link>
                <Sun className='hover:cursor-pointer hover:scale-105 transition-all duration-100'/>
                </>
            )}
           
    </div>
  )
}

export default Bar