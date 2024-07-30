import { UserDataSource } from "../../domain/dataSources";
import { GetAllUsersDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities";
import { UserRepository } from "../../domain/repositories";


export class UserRepositoryImpl implements UserRepository {

    constructor(public userDataSource: UserDataSource){

    }

   async getAllUsers(getAllUsersDto: GetAllUsersDto): Promise<UserEntity[]> {
            return await this.userDataSource.getAllUsers(getAllUsersDto)
    }



}