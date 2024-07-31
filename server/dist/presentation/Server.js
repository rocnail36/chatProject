"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const Routes_1 = require("./Routes");
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.httpServer = (0, http_1.createServer)(this.app);
        this.port = port;
        this.route = Routes_1.AppRoutes.routes;
    }
    config() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use("/api", this.route);
    }
    start() {
        console.log("hola");
        this.config();
        this.httpServer.listen(this.port, () => {
            console.log("server running");
        });
    }
}
exports.Server = Server;
