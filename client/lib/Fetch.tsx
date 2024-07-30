


export async function pFecth (url:string,type:string,object:Object):Promise<any>{


    try {


        const res = await fetch(url,{
            method:type,
            body: JSON.stringify(object),
            headers:{
               'Content-Type': 'application/json'
            }
           })  
        
        const data = await res.json()


        return data 
        
    } catch (error) {
        console.log(error)
        throw new Error(error as string)
    }
 


}