import { Chat } from "../../database/models/Chat";
import { Message } from "../../database/models/Message";
import { MessageDataSource } from "../../domain/dataSources/MessageDataSource";
import { SendMessageDto } from "../../domain/dtos";
import { MessageEntity } from "../../domain/entities";

class MessageDataSourceImpl  implements MessageDataSource{

async sendMessage(dto: SendMessageDto): Promise<MessageEntity[]> {
       
       const {chatId,fromUserId,text} = dto
       try {
          
       const chat = await Chat.findById(chatId).populate("message_id")
    
       if(!chat) throw new Error("chat invalido")

       const message = await Message.create({
        text,
        user_id: fromUserId
       }) 

       await message.save()
       chat.message_id.push(message.id)
       chat.save() 
       return chat.message_id.map(message => MessageEntity.mapper(message))
       


       } catch (error) {
         throw error
       }

}


}