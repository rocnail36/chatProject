import { UserRepository } from "../../repositories";



export class ChangeStatus {


   constructor(private repository:UserRepository){}

   public async execute(id:string,status:boolean){
       return await this.repository.changeState(id,status)
   }

}