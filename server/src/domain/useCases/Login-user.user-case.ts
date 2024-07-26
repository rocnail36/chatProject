import { LoginDto, RegisterDto } from "../dtos";
import { AuthRepository } from "../repositories/AuthRepository";
import { JWT } from "../../config/jwt";




type SignToken = (payload:Object,time:string) => string 


type UserToken = {
    user: {
        id:string,
        name: string,
        token: string
    }
}


export class LoginUser {

    constructor(
        private authRepository : AuthRepository,
        private signToken: SignToken = JWT.signToken
    ){}


    async execute(registerDto: LoginDto): Promise<UserToken>{

     const user = await this.authRepository.login(registerDto)
     const token = this.signToken({...user},"5h")

        return {
           user:{
            ...user,
            token
           }
        }

    }

}