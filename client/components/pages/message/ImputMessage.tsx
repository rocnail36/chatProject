import { Input } from '@/components/ui/input'
import {SendHorizonal} from "lucide-react"
import React from 'react'

const ImputMessage = () => {
  return (
    <div className='fixed bottom-0 w-full max-w-2xl h-[70px] bg-blue-600 flex justify-center items-center'>
       <Input className='w-[80%] mr-4'/>
        <SendHorizonal fill='white' strokeWidth={.5} size={40} className='hover:cursor-pointer'/>
    </div>
  )
}

export default ImputMessage