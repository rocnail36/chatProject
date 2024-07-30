import { Router } from "express";
import { UserController } from "./controller";

import { UserDataSourceImpl } from "../../structure/dataSources";

import { UserRepositoryImpl } from "../../structure/repositories";

export class UserRoutes {
   

  static get routes() {
    const router = Router();
    const dataSource = new UserDataSourceImpl();
    const repository = new UserRepositoryImpl(dataSource);
    const controller = new UserController(repository);

    router.get("/:id/:query?", controller.getAllUser.bind(controller));

    return router;
  }
}
