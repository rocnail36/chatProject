"use client"
import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import { usePathname, useSearchParams,useRouter } from 'next/navigation'


const Search = ({input}:{input:string}) => {


  const searchParams = useSearchParams()
  const pathname = usePathname()
  const replace = useRouter().replace


  
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
   
    const params = new URLSearchParams(searchParams)
    if(e.target.value){
      params.set('input', e.target.value)
      
    }else{
      params.delete('input')
    }
    replace(`${pathname}?${params.toString()}`);
  }

  console.log(input)
   
  return (
    <form className='flex justify-center items-center w-[60%] max-w-[300px] fixed top-12 right-[50%] translate-x-[50%] z-50'>
           <SearchIcon className='z-[51]'/> 
           <Input 
           onChange={onChange} 
           className='rounded-[20px] w-[100%] ml-[-35px] z-50 pl-[35px] text-gray-700 outline-none ring-0 ring-blue-400'
           defaultValue={input}/>
    </form>
  )
}

export default Search