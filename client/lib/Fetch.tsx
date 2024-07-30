


export async function pFecth (url:string,type:string,object:Object,cache?:RequestCache):Promise<any>{


    try {


        const res = await fetch(`http://localhost:8080/api${url}`,{
            method:type,
            body: JSON.stringify(object),
            headers:{
               'Content-Type': 'application/json'
            },
            cache: cache || "default"
           })  
        
        const data = await res.json()


        return data 
        
    } catch (error) {
        console.log(error)
        throw new Error(error as string)
    }
 


}