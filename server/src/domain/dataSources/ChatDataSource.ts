import { GetChatDto, GetChatsDto } from "../dtos";
import { ChatEntity } from "../entities";


export abstract class ChatDataSource {

  abstract  getChat(dto:GetChatDto):Promise<ChatEntity>
  abstract getChats(dto:GetChatsDto):Promise<ChatEntity[]>
}