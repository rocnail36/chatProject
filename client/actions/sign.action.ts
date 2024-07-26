"use server"

import { signIn } from "@/auth"


 

export async function sign(values:{[key:string]:any}){
    

       const res = await signIn("credentials",{...values,redirectTo:"/"})

       
}