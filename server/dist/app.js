"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = require("./config/Env");
const Moongose_1 = require("./database/Moongose");
const Server_1 = require("./presentation/Server");
const Socket_1 = require("./presentation/Socket");
(() => __awaiter(void 0, void 0, void 0, function* () {
    main();
}))();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const { PORT, URI } = Env_1.envs;
        const server = new Server_1.Server(PORT);
        const socket = new Socket_1.Socket(server.httpServer);
        Moongose_1.MoongoseDb.connect(URI);
        socket.start();
        server.start();
    });
}
