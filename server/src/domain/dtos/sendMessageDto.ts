

export class SendMessageDto {

 private  constructor(public chatId:string,public fromUserId:string, public toUserId:string,public text:string){}


   static create(chatId:string,fromUserId:string, toUserId:string,text:string){

    if(!chatId) return ["id chat invalido"]
    if(!toUserId) return ["toUserId invalido"]
    if(!text) return ["text faltante"]
    if(!fromUserId) return ["fromUserId invalido"]

    return [undefined, new SendMessageDto(chatId,fromUserId,toUserId,text)]

   }

}