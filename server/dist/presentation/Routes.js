"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./auth/routes");
const routes_2 = require("./user/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        // Definir todas mis rutas principales
        router.use('/auth', routes_1.AuthRoutes.routes);
        router.use("/user", routes_2.UserRoutes.routes);
        // router.use('/api/user')
        // router.use('/api/products')
        // router.use('/api/clients')
        // router.use('/api/orders')
        return router;
    }
}
exports.AppRoutes = AppRoutes;
