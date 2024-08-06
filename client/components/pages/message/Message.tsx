import clsx from 'clsx'
import React from 'react'

type Props = {
    text:string,
    userfriendId?:string
    user_id?:string
}

const Message = ({text,userfriendId,user_id}:Props) => {
   
  return (
    <div className={`  px-4 py-[1px] text-base rounded-[20px] ${clsx({
        "self-start bg-gray-300": userfriendId == user_id,
        "self-end bg-blue-300": userfriendId != user_id
    })} `}>
    <p>{text}</p>
  </div>
  )
}

export default Message