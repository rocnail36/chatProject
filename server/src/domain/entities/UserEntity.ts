


export class UserEntity  {

    constructor(
        public id : string,
        public name: string,
        public email: string,
        public password: string,
        public userFriends ?: UserEntity[]
    ){}


    static mapper(user:{[key:string]:any}){

       const {_id,id,name,email,password,userFriends} = user

       if(!_id||!id) throw new Error("debe tener un id")
       if(!name) throw new Error("debe tene un nombre")
        if(!email) throw new Error("debe tener un correo")
        if(!password) throw new Error("debe tener una contraseña")

            return new UserEntity(
                _id || id,
                name,
                email,
                password,
                userFriends || []
            )

    }

}