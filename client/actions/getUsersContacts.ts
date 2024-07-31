"use server"
import { auth } from "@/auth";
import { pFecth } from "@/lib";



export async function getUsersContacts(InputSearch?:string)  {
    const session = await auth()
    console.log(session,"aaaaaaaaa")
    try {
    const res = await pFecth(
        `/user/${session?.user.id}${InputSearch ? `/${InputSearch}`: ""}`,
        "GET",
        undefined,
        "no-cache"
      )
    
      return res
    } catch (error) {
      console.log(error);
    }
  }