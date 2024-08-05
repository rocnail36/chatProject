import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async() => {
    const session = await auth()
    if(session){
        redirect("/app")
    }else{
      redirect("/auth/login")
    }
 
}

export default Page