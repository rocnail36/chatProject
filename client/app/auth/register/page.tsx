import { RegisterForm } from '@/components/forms'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen w-[80%] m-auto flex flex-col items-center justify-center pb-10 max-w-xl">
        <h2 className='text-3xl font-bold text-center mb-8'>Debes ingresar tus datos para registrarte</h2>
        <RegisterForm/>
        <div className='flex items-center gap-2'>
            <p className='text-gray-600'>¿Ya tienes una cuenta?</p>
            <button>Ingresar</button>
        </div>
    </div>
  )
}

export default page