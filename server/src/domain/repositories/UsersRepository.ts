import { GetAllUsersDto } from "../dtos";
import { UserEntity } from "../entities";

export abstract class UserRepository {
    abstract getAllUsers(getAllUserDto:GetAllUsersDto,query?:string):Promise<UserEntity[]> 
    abstract changeState(id:string,status:boolean):Promise<UserEntity>
}