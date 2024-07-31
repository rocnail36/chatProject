"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const AuthDataSourceImpl_1 = require("../../structure/dataSources/AuthDataSourceImpl");
const AuthRepositorieImpl_1 = require("../../structure/repositories/AuthRepositorieImpl");
const controller_1 = require("./controller");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new AuthDataSourceImpl_1.AuthDatasourceImpl();
        const authRepository = new AuthRepositorieImpl_1.AuthRepositoryImpl(datasource);
        const controller = new controller_1.AuthController(authRepository);
        // Definir todas mis rutas principales
        router.post('/register', controller.register.bind(controller));
        router.post('/login', controller.login.bind(controller));
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
