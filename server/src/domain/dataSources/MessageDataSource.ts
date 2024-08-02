import { SendMessageDto } from "../dtos";
import { MessageEntity } from "../entities";

export abstract class MessageDataSource {

    abstract sendMessage(dto:SendMessageDto):Promise<MessageEntity[]>

}