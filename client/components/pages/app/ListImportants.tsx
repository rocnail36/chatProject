import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import ImpotantItem from './ImpotantItem'

const ListImportants = () => {
  return (
    <div className='flex items-center gap-5 mb-12'>
   <ImpotantItem/>
   <ImpotantItem/>
   <ImpotantItem/>
   <ImpotantItem/>
</div>
  )
}

export default ListImportants