import { GetChatDto } from "../dtos";
import { ChatEntity } from "../entities";


export abstract class ChatDataSource {

  abstract  getChat(dto:GetChatDto):Promise<ChatEntity>
    
}