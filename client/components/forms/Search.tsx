import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'


const Search = () => {
   
  return (
    <form className='flex justify-center items-center w-[60%] fixed top-12 right-[50%] translate-x-[50%] z-50'>
           <SearchIcon className='z-[51]'/> <Input className='rounded-[20px] w-[100%] ml-[-35px] z-50 pl-[35px] text-gray-700 outline-none ring-0 ring-blue-400'/>
    </form>
  )
}

export default Search