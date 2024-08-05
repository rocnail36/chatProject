import { Chat } from "../../database/models/Chat";
import { Message } from "../../database/models/Message";
import { MessageDataSource } from "../../domain/dataSources/MessageDataSource";
import { SendMessageDto } from "../../domain/dtos";
import { MessageEntity } from "../../domain/entities";

export class MessageDataSourceImpl  implements MessageDataSource{

async sendMessage(dto: SendMessageDto): Promise<MessageEntity[]> {
       
       const {chatId,fromUserId,text} = dto
       try {
          
       const chat = await Chat.findById(chatId)
    
       if(!chat) throw new Error("chat invalido")

       const message = await Message.create({
        text,
        user_id: fromUserId,
        modified: Date.now()
       }) 

       await message.save()

       chat.message_id.push(message.id)
       chat.modified.setTime(Date.now())
       chat.markModified("modified")
       
       await (await chat.save()).populate("message_id")
       
       return chat.message_id.map(message => MessageEntity.mapper(message))
       


       } catch (error) {
         throw error
       }

}


}