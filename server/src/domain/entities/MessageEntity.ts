export class MessageEntity {

  private  constructor(public id:string,public user_id:string,public text:string){
   
    }

   static mapper(message:{[key:string]:any}){

        const {id,_id,text,user_id} = message
    
        if(!id && !_id) throw new Error("falta el id")
        if(!text) throw new Error("falta el text")
        if(!user_id) throw new Error("fala el user id")    

        return new  MessageEntity(id||_id,user_id,text)   
    }



}