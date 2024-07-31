"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const dataSources_1 = require("../../structure/dataSources");
const repositories_1 = require("../../structure/repositories");
class UserRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const dataSource = new dataSources_1.UserDataSourceImpl();
        const repository = new repositories_1.UserRepositoryImpl(dataSource);
        const controller = new controller_1.UserController(repository);
        router.get("/:id/:query?", controller.getAllUser.bind(controller));
        return router;
    }
}
exports.UserRoutes = UserRoutes;
