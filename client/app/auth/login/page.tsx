"use client"
import { sign } from '@/actions/sign.action'
import LogForm from '@/components/forms/LogForm'
import Image from 'next/image'
import React, { useState } from 'react'



const page = () => {

   
  return (
    <div className="h-screen w-[80%] m-auto flex flex-col items-center justify-center pb-10">
      <Image src={"/image-login.png"} width={283} height={216} alt='image' className='mb-16 self-start self' />
        <h2 className='text-3xl font-bold text-center mb-8'>Debes ingresar tus datos para usar la app</h2>
        <LogForm/>
        <div className='flex items-center gap-2'>
            <p className='text-gray-600'>¿No tienes una cuenta?</p>
            <button>Registrate</button>
        </div>
    </div>
  )
}

export default page