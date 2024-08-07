import { FilterQuery } from "mongoose";
import { IUser, User } from "../../database/models/User";
import { UserDataSource } from "../../domain/dataSources";
import { GetAllUsersDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities";
import { Chat } from "../../database/models/Chat";


export class UserDataSourceImpl extends UserDataSource {

  async getAllUsers(
    getAllUserDto: GetAllUsersDto,
    query?: string
  ): Promise<UserEntity[]> {
    try {


      
      const searchQuery: FilterQuery<IUser> = {
        _id: { $ne: getAllUserDto.id },
      };

      if (query) {
        searchQuery.name = { $regex: query, $options: "i" };
      }

      const data = await User.find(searchQuery, { password: 0 });

      const users = data.map((user) => UserEntity.mapper(user));

      return users;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async changeState(id: string, status: boolean): Promise<UserEntity> {
    try {

     
      const user = await User.findByIdAndUpdate(
        id,
        { status: status ? "connected" : "offline" },
        { returnDocument: "after" }
      );

      if (!user) throw new Error("usuario no encontrado");

      const userEntity = UserEntity.mapper(user);

      return userEntity;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getUserData(id: string,query?:string): Promise<UserEntity> {

    try {


      const querymatch: {_id:object,name?:object} = {_id:{$ne:id}}
      if(query){
        querymatch.name = {$regex:query,$options:"i"}
      }
      
      
      const user = await User.findById(id).populate({path:"chats" ,options:{sort: {modified:-1}},populate: [{path:"users",select:["name","status"],match:querymatch},{path:"message_id",options:{sort:{modified:-1},perDocumentLimit:1}}]})
      console.log(user,"aqui")
      return UserEntity.mapper(user!)
    } catch (error) {
      console.log(error,"error")
      throw error

    }

  }
}
