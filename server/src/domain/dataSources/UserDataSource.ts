import { GetAllUsersDto } from "../dtos";
import { UserEntity } from "../entities";


export abstract class UserDataSource {
    abstract getAllUsers(getAllUserDto:GetAllUsersDto,query?:string):Promise<UserEntity[]>
    abstract changeState(id:string,status:boolean):Promise<UserEntity>
    abstract getUserData(id:string,query?:string):Promise<UserEntity>
}
