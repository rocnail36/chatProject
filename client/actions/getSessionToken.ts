"use server"

import { auth } from "@/auth"

export async function getSessionToken(){


    const session = await auth()
 
    if(!session?.user){
        return 
    }

    return session.user.token
}