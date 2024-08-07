import { Application } from "express";
import { Server } from "http";
import { Server as createServer, Socket } from "socket.io";
import { JWT } from "../config/jwt";
import { ChangeStatus } from "../domain/useCases/Users";
import { ChatDataSourceImpl, UserDataSourceImpl } from "../structure/dataSources";
import { ChatRepositoryImpl, MessageRepositoryImpl, UserRepositoryImpl } from "../structure/repositories";
import { GetChatDto, GetChatsDto, SendMessageDto } from "../domain/dtos";
import { MessageDataSource } from "../domain/dataSources/MessageDataSource";
import { MessageDataSourceImpl } from "../structure/dataSources/MessageDatasourceImpl";
import { SendMessage } from "../domain/useCases/message/sendMessage.use-case";
import { GetChats } from "../domain/useCases/chats/getChats.use-case";
import { envs } from "../config/Env";


const {CLIENT} = envs

export class SocketServer {
  static instance: SocketServer
  public io: createServer;
  private userDataSource = new UserDataSourceImpl();
  private userRepository = new UserRepositoryImpl(this.userDataSource);
  private messageDataSource = new MessageDataSourceImpl()
  private messageRepository = new MessageRepositoryImpl(this.messageDataSource)
  private chatDataSource = new ChatDataSourceImpl()
  private chatRepository = new ChatRepositoryImpl(this.chatDataSource)


 private constructor(server: Server) {
    
 
    this.io = new createServer(server, {
      cors: {
        origin: CLIENT,
      },
    });
  }

 static initWsInstance(server:Server){
      this.instance = new SocketServer(server)
      return this.instance
  }

  static getInstance(){
    if(!this.getInstance){
      throw Error( "error ws no inicializado")
    }
    return this.instance
  }

  public verifyHandShake(socket: Socket): [string?, string?] {
    const token = (socket.handshake.headers.authorization as string).split(
      " "
    )[1];

    if (token == "undefined" || !token) {
      return ["token no valid"];
    }

    return [undefined, token];
  }

  public async start() {
    this.io.on("connection", async (socket) => {
      let user;
 
      // handshake y jwt

      const [error, token] = this.verifyHandShake(socket);
      console.log(error)
      console.log("socket connected")
      if (error) return;

      const userToken = JWT.verifyJWT<{ id: string }>(token!);
      
        if (!userToken) {
        socket.disconnect(true);
          return
      }
    
      socket.join(userToken!.id);

      try {
        //conectar usuario
        const changeStatus = new ChangeStatus(this.userRepository);
        user = await changeStatus.execute((userToken as { id: string }).id, true);

        // avisar a los demas usuarios

        this.io.emit("user-connected", user);

        socket.on("disconnect", async () => {
          user = await changeStatus.execute((userToken as { id: string }).id, false);

          this.io.emit("user-disconnected", user);
        });

        socket.on("sendMessage:client", async(data) => {

          try {
            const {idChat,text,idUserFriend} = data
            const  [error1, dto1] =  SendMessageDto.create(idChat,userToken!.id,idUserFriend,text)
            const  [error2,dto2] = GetChatsDto.createDto(idUserFriend)
             if(error1 || error2) throw new Error(error)

            const sendMessage = new SendMessage(this.messageRepository)
            const getChats = new GetChats(this.chatRepository)
            const message = await sendMessage.execute(dto1!)
            const chat = await getChats.execute(dto2!)
           
            
            
            this.io.to(idUserFriend).emit("sendMessage:server",message)
            this.io.to(idUserFriend).emit("sendChat:server",chat)
            this.io.to(userToken!.id).emit("sendMessage:server",message)
           
          } catch (error) {
              console.log(error)
          }
          
          
           
        });

        
      } catch (error) {
        console.log(error);
       
      }
    });
  }

  
}
