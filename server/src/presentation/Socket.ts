import { Application } from "express";
import { Server } from "http";

import { Server as createServer, Socket } from "socket.io";
import { envs } from "../config/Env";
import { JWT } from "../config/jwt";
import { ChangeStatus } from "../domain/useCases/Users";
import { UserDataSourceImpl } from "../structure/dataSources";
import { UserRepository } from "../domain/repositories";
import { UserRepositoryImpl } from "../structure/repositories";

export class SocketServer {
  public io: createServer;
  public userDataSource = new UserDataSourceImpl()
  public userRepository = new UserRepositoryImpl(this.userDataSource)

  constructor(server: Server) {
    this.io = new createServer(server, {
      cors: {
        origin: "http://localhost:3000",
      },
    });
  }

  public verifyHandShake(socket: Socket): [string?, string?] {
    const token = (socket.handshake.headers.authorization as string).split(
      " "
    )[1];

    if (token == "undefined" || !token) {
      console.log("token no valido");
      return ["token no valid"];
    }

    return [undefined, token];
  }

  public async start() {
    this.io.on("connection", async (socket) => {

      let user;  
      console.log("socket connected");
      // handshake y jwt

      const [error, token] = this.verifyHandShake(socket);

      if (error) return
      
      const data = JWT.verifyJWT(token!);
      
      if(!data){
        socket.disconnect(true)
      }

         
      try {
        //conectar usuario
        const changeStatus = new ChangeStatus(this.userRepository)
        user = await changeStatus.execute((data as {id:string}).id,true)
        
        // avisar a los demas usuarios

        this.io.emit("user-connected", user)

        socket.on("disconnect", async() => {
            
           user = await changeStatus.execute((data as {id:string}).id,false)
          
           this.io.emit("user-disconnected", user)
        })
        
      } catch (error) {
        console.log(error)
      }
      
       
       
    
      
      
      
    });
  }


}
