import { Request, Router } from "express";
import { AuthMiddleware } from "../middleware/auth";
import { ChatDataSourceImpl } from "../../structure/dataSources";
import { ChatRepositoryImpl } from "../../structure/repositories";
import { ChatController } from "./controller";




export class ChatRoutes {
   

  static get routes() {
    const router = Router();

    const dataSource = new ChatDataSourceImpl()
    const repository = new ChatRepositoryImpl(dataSource)
    const controller = new ChatController(repository)

    router.get("/:id", AuthMiddleware.validateJWT,controller.getChat.bind(controller));

    return router;
  }
}
