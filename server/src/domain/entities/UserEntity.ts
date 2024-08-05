import { stat } from "fs"
import { ChatEntity } from "./ChatEntity"



export class UserEntity  {

    constructor(
        public id : string,
        public name: string,
        public email: string,
        public status: "offline" | "connected",
        public chats ?: ChatEntity[],
        public userFriends ?: UserEntity[]
    ){}


    static mapper(user:{[key:string]:any}){

       const {_id,id,name,email,userFriends,status,chats} = user

       if(!_id||!id) throw new Error("debe tener un id")
       if(!name) throw new Error("debe tene un nombre")
       if(!email) throw new Error("debe tener un correo")
       if(!status) throw new Error("debe tener un contraseña")   

            return new UserEntity(
                _id || id,
                name,
                email,
                status,
                chats || [],
                userFriends || []
            )

    }

}