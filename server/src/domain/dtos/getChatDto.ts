export class GetChatDto {  

   private constructor(public first_id:string,public second_id:string){
    }
   

   static createDto(id:string,second_id:string):[string?,GetChatDto?]{

        if(!id || typeof id !== "string") return ["falta el id"]
        if(!second_id || typeof second_id !== "string") return ["falta el segundo id"]

        return [undefined,new GetChatDto(id,second_id)]

    }
}