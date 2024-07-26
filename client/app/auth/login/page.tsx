"use client"
import { sign } from '@/actions/sign.action'
import LogForm from '@/components/forms/LogForm'
import React, { useState } from 'react'



const page = () => {

   
  return (
    <div className="h-screen w-[80%] m-auto flex flex-col items-center justify-center">
        <h2 className='text-3xl font-bold text-center mb-14'>Debes ingresar tus datos usar la app</h2>
        <LogForm/>
        <div className='flex items-center gap-2'>
            <p className='text-gray-600'>¿No tienes una cuenta?</p>
            <button>Registrate</button>
        </div>
    </div>
  )
}

export default page