import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories";
import { getAllUsers, GetUserData } from "../../domain/useCases/Users";
import { GetAllUsersDto } from "../../domain/dtos";




export class UserController {


    constructor(private repository: UserRepository){}

    getAllUser(req:Request,res:Response){
   
        const [err,dto] = GetAllUsersDto.create((req.params))
     
        if(err) return res.status(400).json({err})
        new getAllUsers(this.repository)
        .execute(dto!,req.params.query)
        .then(response => res.json(response))
        .catch(err => {
            console.log(err)
        })

    }

    getUserData(req:Request,res:Response){

        const {_id} = req.body.user
        const {query} = req.params
          
        new GetUserData(this.repository)
        .execute(_id,query)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err.message))

    }



}