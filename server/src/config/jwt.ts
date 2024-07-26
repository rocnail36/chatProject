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




}




