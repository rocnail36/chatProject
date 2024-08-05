import { MessageDataSource } from "../../domain/dataSources/MessageDataSource";
import { SendMessageDto } from "../../domain/dtos";
import { MessageEntity } from "../../domain/entities";
import { MessageRepository } from "../../domain/repositories";



export class MessageRepositoryImpl implements MessageRepository {

   constructor(private datasource:MessageDataSource){}

   async sendMessage(dto: SendMessageDto): Promise<MessageEntity[]> {
            return await this.datasource.sendMessage(dto)
    }

}