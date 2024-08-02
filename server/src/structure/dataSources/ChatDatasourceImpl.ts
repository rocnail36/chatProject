import path from "path";
import { Chat } from "../../database/models/Chat";
import { User } from "../../database/models/User";
import { ChatDataSource } from "../../domain/dataSources/ChatDataSource";
import { GetChatDto } from "../../domain/dtos";
import { ChatEntity } from "../../domain/entities";

export class ChatDataSourceImpl implements ChatDataSource {



 async getChat(dto: GetChatDto): Promise<ChatEntity> {
    const { first_id, second_id } = dto;

    const user = await User.findById(first_id)
      .populate({ path: "chats", match: { users: second_id }, populate: {path:"users",select:["name","usersFriend"]}})
      .exec();
   

    try {
      if ((!user?.chats[0])) {
        const chat = await Chat.create({
          users: [first_id, second_id],
        });

        await chat.save();

        await User.findByIdAndUpdate(first_id, {
          $push: { chats: chat._id },
        });
        await User.findByIdAndUpdate(second_id, {
          $push: { chats: chat._id },
        });
        
        return ChatEntity.mapper(chat)
        
      } else {
       
        return ChatEntity.mapper(user?.chats[0])

      }
    } catch (error) {
      throw error
    }
  }




}
