import { ChatDataSource } from "../../domain/dataSources/ChatDataSource";
import { GetChatDto, GetChatsDto } from "../../domain/dtos";
import { ChatEntity } from "../../domain/entities";
import { ChatRepository } from "../../domain/repositories";




export class ChatRepositoryImpl implements ChatRepository{

    constructor(public dataSource:ChatDataSource){}

   async getChat(dto: GetChatDto): Promise<ChatEntity> {
      return await this.dataSource.getChat(dto)
    }

   async getChats(dto:GetChatsDto): Promise<ChatEntity[]> {
          return await this.dataSource.getChats(dto)        
    }

}