import express, { Router } from "express"
import { AppRoutes } from "./Routes"
import { createServer } from "http";
import cors from "cors"


export class Server {

   public app = express()
   public httpServer =  createServer(this.app);
   route: Router
   port:number

    constructor(port:number)
    {
     this.port = port
     this.route = AppRoutes.routes
    
    }


    config(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use("/api", this.route)
        
    }


    start(){

      
        this.config()

        this.httpServer.listen(this.port,() => {
            console.log("server running")
        })
    }

}