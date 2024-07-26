



export class RegisterDto {

   private constructor(
        public password:string,
        public name: string,
        public email: string
    ){}


    static createDto(object:{[key:string]:any} = {}):[string?,RegisterDto?]{


        const {email,name,password} = object

        console.log(email)

        if(!email) return ["debes tener un correo valido"]
        if(!name) return ["debes introducir un nombre"]
        if(!password) return ["debes introducir un password valido"]

        


        return [undefined,new RegisterDto(password,email,name)]

    }


}