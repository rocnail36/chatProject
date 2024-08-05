import { Router } from "express";
import { UserController } from "./controller";

import { UserDataSourceImpl } from "../../structure/dataSources";

import { UserRepositoryImpl } from "../../structure/repositories";
import { AuthMiddleware } from "../middleware/auth";

export class UserRoutes {
   

  static get routes() {
    const router = Router();
    const dataSource = new UserDataSourceImpl();
    const repository = new UserRepositoryImpl(dataSource);
    const controller = new UserController(repository);


    router.get("/chats/:query?",AuthMiddleware.validateJWT,controller.getUserData.bind(controller))
    router.get("/:id/:query?", controller.getAllUser.bind(controller));
    

    return router;
  }
}
