"use client"
import React, { useEffect, useState } from 'react'

type Props = {
    message:string
}

const ErrorC = ({message}:Props) => {


  return (
    <div className='absolute top-10 right-5 bg-red-400 rounded-[10px] px-2 text-white'>
    <p>{message}</p>
    </div>
  )
}

export default ErrorC