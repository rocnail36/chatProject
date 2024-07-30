

export class GetAllUsersDto {
    private constructor(public id:string){}


    static create(object:{[key:string]:any}):[string?,GetAllUsersDto?]{
        const {id} = object
        if(!id) return ["falta el id"]


        return [undefined, new GetAllUsersDto(id)]
    }
}


