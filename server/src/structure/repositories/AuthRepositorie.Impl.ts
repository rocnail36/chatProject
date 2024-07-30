import { AuthDatasource } from "../../domain/dataSources/AuthDataSource";
import { LoginDto, RegisterDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities";
import { AuthRepository } from "../../domain/repositories/AuthRepository";



export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        public datasource: AuthDatasource
    ){}

   async register(registerUserDto: RegisterDto): Promise<UserEntity> {
      
      return  await this.datasource.register(registerUserDto)

    }

    async login(loginUserDto: LoginDto): Promise<UserEntity> {
        return  await this.datasource.login(loginUserDto)
    }


}