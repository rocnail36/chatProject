import { Input } from '@/components/ui/input'
import { SocketContext } from '@/providers/SocketProvider'
import {SendHorizonal} from "lucide-react"
import React, { useContext, useState } from 'react'


 type Props = {
    
   idChat?: string,
   idUserFriend?: string

  }

const ImputMessage = ({idChat,idUserFriend}:Props) => {

  
 const {socket} = useContext(SocketContext)
 const [text, setText] = useState<string>("")

 const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    socket?.emit("sendMessage:client",{idChat,text:text,idUserFriend})
 }

 const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value
      setText(newText)
 }

  return (
    <div className='fixed bottom-0 w-full max-w-2xl h-[70px] bg-blue-600 flex justify-center items-center'>
      <form className="w-[80%] flex" onSubmit={onSubmit}>
       <Input className='ml-10 w-[80%]' onChange={onChange} name="text"/>
       
       <button> 
        <SendHorizonal fill='white' strokeWidth={.5} size={40} className='hover:cursor-pointer'/>
        </button>    
       </form>
    </div>
  )
}

export default ImputMessage