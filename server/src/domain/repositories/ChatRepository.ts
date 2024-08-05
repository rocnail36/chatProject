import { GetChatsDto } from "../dtos";
import { GetChatDto } from "../dtos/getChatDto";
import { ChatEntity } from "../entities/ChatEntity";

export abstract class ChatRepository {

  abstract  getChat(dto:GetChatDto):Promise<ChatEntity>
  abstract getChats(dto:GetChatsDto):Promise<ChatEntity[]>

}