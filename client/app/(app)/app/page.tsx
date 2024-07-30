import { Search } from '@/components/forms'
import { ListImportants, ListMessage} from '../../../components/pages/app/index'
import React from 'react'

const page = async({searchParams}:{
  params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
  


 
 

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