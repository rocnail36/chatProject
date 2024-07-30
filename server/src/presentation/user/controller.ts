import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories";
import { getAllUsers } from "../../domain/useCases/Users";
import { GetAllUsersDto } from "../../domain/dtos";




export class UserController {


    constructor(private repository: UserRepository){}

    getAllUser(req:Request,res:Response){

        console.log(req.params,"auit")

        const [err,dto] = GetAllUsersDto.create((req.params))

        if(err) return res.status(400).json({err})

        new getAllUsers(this.repository)
        .execute(dto!,req.params.query)
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))

    }



}