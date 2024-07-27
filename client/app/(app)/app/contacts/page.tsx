
import { Search } from '@/components/forms'
import ContactItem from '@/components/pages/contact/ContactItem'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const page = () => {
  return (
    <div className='m-auto'>
        <Search/>  
         
        <div className='mt-4'>
    <ContactItem/>
    <ContactItem/>
    <ContactItem/>
    <ContactItem/>
        </div>
    </div>
  )
}

export default page