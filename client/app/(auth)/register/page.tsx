import { getSessionToken } from '@/actions'
import { RegisterForm } from '@/components/forms'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {


  

  return (
    <div className="h-screen m-auto flex flex-col items-center justify-center pb-10 max-w-2xl bg-white relative">
         <Image src={"/imageLogin.webp"} width={283} height={216} alt='image' className='mb-16 ' />
        <h2 className='text-3xl font-bold text-center mb-8 max-w-[300px]'>Debes ingresar tus datos para registrarte</h2>
        <RegisterForm/>
        <div className='flex items-center gap-2'>
            <p className='text-gray-600'>¿Ya tienes una cuenta?</p>
            <Link href={"/login"}>
            <button>Ingresar</button>
            </Link>
        </div>
    </div>
  )
}

export default Page