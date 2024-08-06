import { RegisterDto } from "../../dtos";
import { AuthRepository } from "../../repositories/AuthRepository";
import { JWT } from "../../../config/jwt";
import { SocketServer } from "../../../presentation/Socket";





type SignToken = (payload:Object,time:string) => string 

type UserToken = {
    user: {
        id:string,
        name: string,
        token: string
    }
}

export class RegisterUser {

    constructor(
        private authRepository : AuthRepository,
        private signToken: SignToken = JWT.signToken,
        private socket = SocketServer.getInstance()
    ){}


    async execute(registerDto: RegisterDto): Promise<UserToken>{
      
     const user = await this.authRepository.register(registerDto)
 
     const token = this.signToken({...user},"5h")
      
     this.socket.io.emit("newUserConnected:server",user)

     return {
        user:{
         ...user,
         token
        }
     }

    }

}