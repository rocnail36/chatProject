import { GetAllUsersDto } from "../dtos";
import { UserEntity } from "../entities";


export abstract class UserDataSource {
    abstract getAllUsers(getAllUserDto:GetAllUsersDto,query?:string):Promise<UserEntity[]>
}