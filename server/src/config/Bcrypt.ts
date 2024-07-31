import bcript from "bcrypt"



export class PasswordHash {


   static async hashPassword (password:string){
      return  await  bcript.hash(password,10)
   }

   static async comparePassword (password:string,hashPassword:string){
      
    return await bcript.compare(password,hashPassword)
   }


}