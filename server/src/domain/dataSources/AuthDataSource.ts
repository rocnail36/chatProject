import { UserEntity } from '../entities'; 
import { LoginDto,RegisterDto } from '../dtos';





export abstract class AuthDatasource {

  // todo:
  abstract login( loginUserDto: LoginDto ):Promise<UserEntity>

  abstract register( registerUserDto: RegisterDto ):Promise<UserEntity>


}