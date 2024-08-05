import { MessageEntity } from "./MessageEntity";
import { UserEntity } from "./UserEntity";



export class ChatEntity {

    constructor(public id:string,public message_id:MessageEntity[],public users:UserEntity[]){
    }

   static mapper(chat:{[key:string]:any}):ChatEntity{

    const {id,_id,message_id,users} = chat
    
    if(!id && !id) throw new Error("falta un id")
    if(!message_id) throw new Error("falta un array de mensajes")    
    if(!users) throw new Error("fatan los amigos")    

    return new ChatEntity(id || _id , message_id,users)

   }

}