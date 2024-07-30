import { UserEntity } from "../entities";

export abstract class UserRepository {
    abstract getAllUsers():Promise<UserEntity[]> 
}