import { GetChatsDto } from "../../dtos";
import { ChatEntity } from "../../entities";
import { ChatRepository } from "../../repositories";


export class GetChats{

    constructor(public repository:ChatRepository){}


   async execute(dto:GetChatsDto):Promise<ChatEntity[]>{
       return await this.repository.getChats(dto)
    }



}