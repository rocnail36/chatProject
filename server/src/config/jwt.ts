import jwt, { JwtPayload } from "jsonwebtoken"
import { envs } from "./Env"

const {SECRET} = envs


export class JWT {

  static  signToken (payload: Object,time:string) {
        const token =  jwt.sign(payload,SECRET,{
               expiresIn: time
           })
       
           return token
       }


  static verifyJWT <t>(token:string):t|null{

    try {
      const tokenVerified = jwt.verify(token, envs.SECRET)
      if(!tokenVerified){
        return null
      }
      return tokenVerified as t
    } catch (error) {
      console.log(error)
       return null
    }

   

  }




}




