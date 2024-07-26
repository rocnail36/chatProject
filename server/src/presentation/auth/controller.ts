import { Request, Response } from "express";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { RegisterUser } from "../../domain/useCases/Register-user.user-case";
import { RegisterDto} from "../../domain/dtos";





export class AuthController {


    constructor(
       private readonly repository:AuthRepository,
       
    ){}


    register(req:Request,res:Response){
       
        const body = req.body
        console.log(body)
        const [error,dto] = RegisterDto.createDto(body)

        if(error) return res.status(400).json({error})

     

        new RegisterUser(this.repository)
        .execute(dto!)
        .then(result => res.status(402).json(result))
        .catch(error => {
            res.status(400).json(error.message)
        })


    }


}