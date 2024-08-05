export class GetChatsDto {


    private constructor(public id:string){}


   static createDto(id:string):[string?,GetChatsDto?]{


    if(!id || typeof id !== "string") return ["id invalido"]
     

    return [undefined,new GetChatsDto(id)]


   }


}