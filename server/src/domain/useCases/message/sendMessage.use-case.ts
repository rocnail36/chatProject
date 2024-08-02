import { SendMessageDto } from "../../dtos";
import { ChatRepository, MessageRepository } from "../../repositories";


export class SendMessage {


    constructor(private repository:MessageRepository){}

   async execute(dto:SendMessageDto){
 
       return  await this.repository.sendMessage(dto)

    }

}