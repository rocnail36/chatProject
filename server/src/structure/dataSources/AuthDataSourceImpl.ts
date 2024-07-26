import { PasswordHash } from "../../config/Bcrypt";
import { User } from "../../database/models/User";
import { AuthDatasource } from "../../domain/dataSources/AuthDataSource";
import { LoginDto, RegisterDto } from "../../domain/dtos";
import { UserEntity } from "../../domain/entities";



export class AuthDatasourceImpl implements  AuthDatasource {

  

  async register(registerUserDto: RegisterDto): Promise<UserEntity> {
        
   try {

    const {password,email} = registerUserDto
    console.log(registerUserDto)

    
    const isEmail = await User.findOne({email})
    console.log(isEmail)
    
    if(isEmail) throw new Error("este correo ya existe")
      
    const hashPassword = await PasswordHash.hashPassword(password)

    registerUserDto.password = hashPassword

    const user = await User.create(registerUserDto)
    console.log(user)
    return UserEntity.mapper(user)
    
   } catch (error) {
       console.log(error)
       throw new Error(error as string)
   }
  

   }


  async login(loginUserDto: LoginDto): Promise<UserEntity> {

      try {
        
       const {email,password} = loginUserDto
       console.log(email)
       const user = await User.findOne({email})
       console.log(user)
       if(!user) throw new Error("este correo no esta registrado")

      const isPassword = PasswordHash.comparePassword(password,user.password)
      if(!isPassword) throw new Error("Contraseña invalida")
      
     return UserEntity.mapper(user)

      } catch (error) {
          throw new Error(error as string)
      }

   }
}


