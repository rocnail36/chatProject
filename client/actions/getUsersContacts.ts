"use server"
import { auth } from "@/auth";
import { pFecth } from "@/lib";



export async function getUsersContacts(InputSearch?:string)  {
    const session = await auth()
    try {
    const res = await pFecth(
        `/user/${session?.user.id}${InputSearch ? `/${InputSearch}`: ""}`,
        "GET",
        undefined,
        "no-cache"
      )
      console.log(res,"asd")
      return res
    } catch (error) {
      console.log(error);
    }
  }