import path from "path";
import { Chat } from "../../database/models/Chat";
import { User } from "../../database/models/User";
import { ChatDataSource } from "../../domain/dataSources/ChatDataSource";
import { GetChatDto, GetChatsDto } from "../../domain/dtos";
import { ChatEntity } from "../../domain/entities";


export class ChatDataSourceImpl implements ChatDataSource {



 async getChat(dto: GetChatDto): Promise<ChatEntity> {
    const { first_id, second_id } = dto;
   
    const user = await User.findById(first_id)
      .populate({ path: "chats", match: { users: second_id }, populate: [{path:"users",select:["name","usersFriend"]},{path:"message_id"}] })
      .exec();
     
  console.log(user?.chats[0])
    try {
      if ((!user?.chats[0])) {
        const chat = await Chat.create({
          users: [first_id, second_id],
          modified: Date.now()
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
       
        return ChatEntity.mapper(user.chats[0])

      }
    } catch (error) {
      throw error
    }
  }


 async getChats(dto: GetChatsDto): Promise<ChatEntity[]> {


  const {id} = dto


  try {
    
    const chat = await Chat.find({users: id},{},{sort:{modified:-1}}).populate([{path:"message_id",options:{perDocumentLimit:1,sort:{modified:-1}}},{path:"users",select:["name","status"],match:{_id:{$ne:id}}}])
   
    return  chat.map(chat => ChatEntity.mapper(chat) ) 

  } catch (error) {
    throw error
  }

 }


}
