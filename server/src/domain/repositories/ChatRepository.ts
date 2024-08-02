import { GetChatDto } from "../dtos/getChatDto";
import { ChatEntity } from "../entities/ChatEntity";

export abstract class ChatRepository {

  abstract  getChat(dto:GetChatDto):Promise<ChatEntity>

}