


import { Search } from '@/components/forms'
import { ListImportants, ListMessage} from '../../../components/pages/app/index'
import React from 'react'
import { auth } from '@/auth'
import { pFecth } from '@/lib'

const page = async({searchParams}:{
  params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
  
  const session = await auth()
  

  const users = await pFecth("/user","GET",{id:session?.user.id})

  console.log(users)

  return (
    <div className='m-auto px-4'>
         <Search />
        <h4 className='mb-2 text-gray-800 text-sm'>IMPORTANTES</h4>
        <ListImportants/>
        <ListMessage/>
    </div>
  )
}

export default page