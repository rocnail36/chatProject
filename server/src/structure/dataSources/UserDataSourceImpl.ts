import { User } from "../../database/models/User";
import { UserDataSource } from "../../domain/dataSources";
import { GetAllUsersDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities";




export class UserDataSourceImpl extends UserDataSource {

  async  getAllUsers(getAllUserDto: GetAllUsersDto): Promise<UserEntity[]> {

       try {
            
            const data = await  User.find({_id:{ $ne: getAllUserDto.id } })
            
            const users  = data.map((user => UserEntity.mapper(user)))
            
            return users
       } catch (error) {
            console.log(error)
            throw new Error(error as string)
       }

    }   

}