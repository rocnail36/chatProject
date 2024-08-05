import { useEffect, useState } from "react"

export const useError = () => {

    
  const [error,setError] =  useState(false)


  const triggerError = () => {
    setError(true)
    setTimeout(() => {
        setError(false)
   },5000)

  }

  

  return {
    error,
    triggerError
  }

}