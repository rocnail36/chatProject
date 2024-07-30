import { promises } from "dns";
import { RegisterDto } from "../../dtos";
import { AuthRepository } from "../../repositories/AuthRepository";
import { JWT } from "../../../config/jwt";




type SignToken = (payload:Object,time:string) => string 


type UserToken = {
    token: string,
    user: {
        id:string,
        name: string
    }
}


export class RegisterUser {

    constructor(
        private authRepository : AuthRepository,
        private signToken: SignToken = JWT.signToken
    ){}


    async execute(registerDto: RegisterDto): Promise<UserToken>{
      
     const user = await this.authRepository.register(registerDto)
 
     const token = this.signToken({...user},"5h")
      
        return {
            token,
            user
        }

    }

}