"use server"

import { auth } from "@/auth"

export async function getSessionToken(){


    const session = await auth()
    console.log("Las",session?.user)
    if(!session?.user){
        return 
    }

    return session.user.id
}