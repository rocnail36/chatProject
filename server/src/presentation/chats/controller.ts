import { Request, Response } from "express";
import { ChatRepository } from "../../domain/repositories";
import { GetChatDto } from "../../domain/dtos";
import { GetChat } from "../../domain/useCases/chats/getChat.use-case";




export class ChatController {

    constructor(private repository:ChatRepository){
    }

    getChat(req:Request,res:Response){

        
        
         const [error,dto] = GetChatDto.createDto(req.body.user._id,req.params.id)
         if(error) res.status(400).json(error)
            console.log(dto,"adssds")
         new GetChat(this.repository)
         .execute(dto!)
         .then(result => res.json(result))
         .catch(err => res.status(400).json(err.message))

    }
    
}