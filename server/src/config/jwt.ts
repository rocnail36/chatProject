import jwt from "jsonwebtoken"
import { envs } from "./Env"

const {SECRET} = envs


export class JWT {

  static  signToken (payload: Object,time:string) {
        const token =  jwt.sign(payload,SECRET,{
               expiresIn: time
           })
       
           return token
       }


  static verifyJWT <t>(token:string):t|Error|string | jwt.JwtPayload|undefined{

    try {
      const tokenVerified = jwt.verify(token, envs.SECRET)
      if(!tokenVerified){
        return new Error("token invalido")
      }
      return tokenVerified
    } catch (error) {
      console.log(error)
      return undefined
    }

   
   

  }




}




