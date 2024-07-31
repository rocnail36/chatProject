"use client"
import { Search } from '@/components/forms'
import { ListImportants, ListMessage} from '../../../components/pages/app/index'
import React, { useContext, useEffect } from 'react'
import SockectProvider, { SocketContext } from '@/providers/SocketProvider'
import { auth } from '@/auth'
import { getSessionToken } from '@/actions'

const page = ({searchParams}:{
  params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
  

 
  const {setToken,token} = useContext(SocketContext)
  
  
  const getTokenFromSession = async() => {
    const token = await getSessionToken()
    if(!token) return
    setToken(token)
    localStorage.setItem("token",token)
  }
  
  useEffect(() => {
    getTokenFromSession()
  },[])

  return (
    <div className='m-auto px-4'>
         <Search input='' />
        <h4 className='mb-2 text-gray-800 text-sm'>IMPORTANTES</h4>
        <ListImportants/>
        <ListMessage/>
    </div>
  )
}

export default page