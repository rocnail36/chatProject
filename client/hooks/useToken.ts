import { getSessionToken } from "@/actions"
import { useEffect, useState } from "react"


export const useToken = () => {

    const [isToken,setIsToken] = useState(false)

    const setTokenStorageFromSession = async() => {
        const token = await getSessionToken()
     
        if(!token) return
        localStorage.setItem("token",token)
        setIsToken(true)
        }


        useEffect(() => {
            setIsToken(!!localStorage.getItem("token"))
        },[])
    

    return {
        isToken,
        setTokenStorageFromSession
    }

}