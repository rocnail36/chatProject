import { GetAllUsersDto } from "../../dtos";
import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";


export class getAllUsers {

    constructor(private repository:UserRepository){}

   async execute(GetAllUsersDto:GetAllUsersDto):Promise<UserEntity[]>{
         
             return await this.repository.getAllUsers(GetAllUsersDto)
          
    }



}