import { getSessionToken } from "@/actions"
import { useEffect, useState } from "react"


export const useToken = () => {

    const [isToken,setIsToken] = useState(false)

    const setTokenStorageFromSession = async() => {
        const token = await getSessionToken()
        console.log(token,"eltoken")
        if(!token) return
        localStorage.setItem("token",token)
        setIsToken(true)
        }
    

    return {
        isToken,
        setTokenStorageFromSession
    }

}