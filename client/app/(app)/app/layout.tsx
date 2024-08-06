
import { Search } from '@/components/forms'
import { Bar, Header } from '@/components/layout'
import { Button } from '@/components/ui/button'
import React from 'react'



type props = {
    children: React.ReactNode
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const layout = ({children}:props) => {
  
  return (
    <div className='min-h-screen w-screen  max-w-2xl m-auto '>
        <Header/>
        {children}
        <Bar/>
       
    </div>
  )
}

export default layout