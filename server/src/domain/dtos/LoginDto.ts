export class LoginDto {

    private constructor(
         public password:string,
         public email: string
     ){}
 
 
     static createDto(object:{[key:string]:any}):[string?,LoginDto?]{
 
 
         const {email,password} = object

         console.log(object,"jeeeeeeee")
 
         if(!email) return ["debes tener un correo valido"]
         if(!password) return ["debes introducir un password valido"]
 
         
 
 
         return [undefined,new LoginDto(password,email)]
 
     }
 
 
 }