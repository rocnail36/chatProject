import { Request, Response } from "express";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { RegisterUser } from "../../domain/useCases/Register-user.user-case";
import { LoginDto, RegisterDto} from "../../domain/dtos";
import { LoginUser } from "../../domain/useCases/Login-user.user-case";





export class AuthController {


    constructor(
       private readonly repository:AuthRepository,
       
    ){}


    register(req:Request,res:Response){
       
        const body = req.body
        
        const [error,dto] = RegisterDto.createDto(body)
      
        if(error) return res.status(400).json({error})

        new RegisterUser(this.repository)
        .execute(dto!)
        .then(result => res.status(402).json(result))
        .catch(error => {
            res.status(400).json(error.message)
        })


    }

    login(req:Request,res:Response){

        console.log(req.body,"s")
       const [error,dto] = LoginDto.createDto(req.body)

        if(error) return res.status(400).json(error)
        
        
        new LoginUser(this.repository)
        .execute(dto!)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err.message))


    }


}