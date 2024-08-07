import jwt, { JwtPayload } from "jsonwebtoken"
import { envs } from "./Env"

const {SECRET} = envs


export class JWT {

  static  signToken (payload: Object) {
        const token =  jwt.sign(payload,SECRET,{
               expiresIn:"1080d"
           })
       
           return token
       }


  static verifyJWT <t>(token:string):t|null{

    try {
      const tokenVerified = jwt.verify(token, envs.SECRET)
      if(!tokenVerified){
        throw Error("invalid token")
      }
      return tokenVerified as t
    } catch (error) {
      console.log(error)
      throw error
    }

   

  }




}




