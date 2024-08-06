


export async function pFecth (url:string,type:string,object?:Object,cache?:RequestCache):Promise<any>{


    try {
      

        const res = await fetch(`${process.env.NEXT_PUBLIC_API || process.env.API}/api${url}`,{
            method:type,
            body: object ? JSON.stringify(object): undefined,
            headers:{
               'Content-Type': 'application/json',
               "Authorization": `Bearer ${typeof window !== "undefined" ? localStorage.getItem("token"):""}`
            },
            cache: cache || "default"
           })  
        console.log(res)
        const data = await res.json()
       
        return data 
        
    } catch (error) {
        console.log(error)
        throw new Error(error as string)
    }
 


}