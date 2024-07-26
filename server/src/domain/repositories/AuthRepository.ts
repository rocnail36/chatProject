import { UserEntity } from '../entities'; 
import { LoginDto,RegisterDto } from '../dtos';





export abstract class AuthRepository{

  // todo:
  abstract login( loginUserDto: LoginDto ):Promise<UserEntity>

  abstract register( registerUserDto: RegisterDto ):Promise<UserEntity>


}