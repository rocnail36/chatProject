import { GetAllUsersDto } from "../dtos";
import { UserEntity } from "../entities";

export abstract class UserRepository {
    abstract getAllUsers(getAllUsersDto:GetAllUsersDto):Promise<UserEntity[]> 
}