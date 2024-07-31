import { FilterQuery } from "mongoose";
import { IUser, User } from "../../database/models/User";
import { UserDataSource } from "../../domain/dataSources";
import { GetAllUsersDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities";




export class UserDataSourceImpl extends UserDataSource {

  async  getAllUsers(getAllUserDto: GetAllUsersDto,query?:string): Promise<UserEntity[]> {
 
       try {

            const searchQuery:FilterQuery<IUser> = {_id:{ $ne: getAllUserDto.id} }
            
            if(query){
              searchQuery.name = {$regex:query, $options:'i'}
            } 

         
           
            const data = await  User.find(searchQuery,{password:0})
            console.log(data)
            const users  = data.map((user => UserEntity.mapper(user)))
                    
            return users
       } catch (error) {
            console.log(error)
            throw new Error(error as string)
       }

    }   

  async changeState(id: string,status:boolean): Promise<UserEntity> {
          
     try {
        const user = await User.findByIdAndUpdate(id,{status:status ? "connected" : "offline"},{returnDocument:"after"})
        
        if(!user) throw new Error("usuario no encontrado")
      
        const userEntity = UserEntity.mapper(user)
        
          
        return userEntity

     } catch (error) {
         throw new Error(error as string)
     }

  }  

}