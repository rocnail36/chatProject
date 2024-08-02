import { GetChatDto } from "../../dtos";
import { ChatRepository } from "../../repositories";




export class GetChat {


    constructor(private repository:ChatRepository){}

    async execute(dto:GetChatDto){
      return await this.repository.getChat(dto)
    }

}