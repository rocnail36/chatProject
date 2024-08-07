import { Input } from '@/components/ui/input'
import { SocketContext } from '@/providers/SocketProvider'
import { Message } from '@/types/Message'
import {SendHorizonal} from "lucide-react"
import { useSession } from 'next-auth/react'
import React, { useContext, useState } from 'react'
import {v4} from "uuid"

 type Props = {
  
    
   idChat?: string,
   idUserFriend?: string,
   setMessage : React.Dispatch<React.SetStateAction<Message[]>>

  }

const ImputMessage = ({idChat,idUserFriend,setMessage}:Props) => {

  
 const {socket} = useContext(SocketContext)
 const [text, setText] = useState<string>("")
 const {data} = useSession()
 

 const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    if(text == "") return
    setMessage(old => {
        return [...old,{text:text.trim(),user_id: data?.user.id!,_id:v4()}]
    })
    socket?.emit("sendMessage:client",{idChat,text:text,idUserFriend})
    setText("")
 }

 const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value
      setText(newText)
 }


  
  return (
    <div className='fixed bottom-0 w-full max-w-2xl h-[70px] bg-blue-600 flex justify-center items-center'>
      <form className="w-[80%] flex" onSubmit={onSubmit}>
       <Input className='ml-10 w-[80%]' onChange={onChange} name="text" value={text} autoComplete='off'/>
       
       <button> 
        <SendHorizonal fill='white' strokeWidth={.5} size={40} className='hover:cursor-pointer'/>
        </button>    
       </form>
    </div>
  )
}

export default ImputMessage