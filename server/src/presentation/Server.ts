import express, { Router } from "express"
import { AppRoutes } from "./Routes"


export class Server {

   public app = express()
   route: Router
   port:number

    constructor(port:number)
    {
     this.port = port
     this.route = AppRoutes.routes
    }


    config(){
        this.app.use(express.json())
        this.app.use("/api", this.route)

    }


    start(){

        console.log("hola")
        this.config()

        this.app.listen(this.port,() => {
            console.log("server running")
        })
    }

}