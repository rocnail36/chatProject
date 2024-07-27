


import { Search } from '@/components/forms'
import { ListImportants, ListMessage} from '../../../components/pages/app/index'
import React from 'react'

const page = ({searchParams}:{
  params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
  console.log(searchParams)
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