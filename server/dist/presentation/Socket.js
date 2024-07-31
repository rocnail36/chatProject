"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const socket_io_1 = require("socket.io");
const Env_1 = require("../config/Env");
class Socket {
    constructor(server) {
        this.io = new socket_io_1.Server(server, {
            cors: {
                origin: "http://localhost:3000"
            },
        });
    }
    start() {
        this.io.on("connection", (socket) => {
            console.log("socket connected");
            const token = socket.handshake.headers.authorization.split(" ")[1];
            console.log(token);
            const data1 = undefined;
            console.log(data1);
            if (token) {
                const data = jsonwebtoken_1.default.verify(token, Env_1.envs.SECRET);
                console.log(data);
            }
            else {
            }
        });
    }
}
exports.Socket = Socket;
