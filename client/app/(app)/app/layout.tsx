
import { Search } from '@/components/forms'
import { Bar, Header } from '@/components/layout'
import React from 'react'



type props = {
    children: React.ReactNode
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const layout = ({children,searchParams,params}:props) => {
  
  return (
    <div className='min-h-screen w-screen pt-[140px]'>
        <Header/>
        {children}
        <Bar/>
    </div>
  )
}

export default layout