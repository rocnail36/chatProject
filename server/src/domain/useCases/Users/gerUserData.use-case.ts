import { UserRepository } from "../../repositories";



export class GetUserData {

   constructor(public repository:UserRepository){}

   async execute(id:string,query?:string){
      return await  this.repository.getUserData(id,query)
    }


}