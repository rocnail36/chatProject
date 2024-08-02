import { ChatDataSource } from "../../domain/dataSources/ChatDataSource";
import { GetChatDto } from "../../domain/dtos";
import { ChatEntity } from "../../domain/entities";
import { ChatRepository } from "../../domain/repositories";




export class ChatRepositoryImpl implements ChatRepository{

    constructor(public dataSource:ChatDataSource){}

   async getChat(dto: GetChatDto): Promise<ChatEntity> {
      return await this.dataSource.getChat(dto)
    }

}