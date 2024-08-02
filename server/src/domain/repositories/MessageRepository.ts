import { SendHandle } from "child_process";
import { MessageEntity } from "../entities";
import { SendMessageDto } from "../dtos";



export abstract class MessageRepository {

    abstract sendMessage(dto:SendMessageDto):Promise<MessageEntity[]>

}

