"use server"

import { signIn } from "@/auth"


 

export async function sign(values:{[key:string]:any}){
    

        return  await signIn("credentials",{...values,redirectTo:"/"})

       
}