"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Env_1 = require("./Env");
const { SECRET } = Env_1.envs;
class JWT {
    static signToken(payload, time) {
        const token = jsonwebtoken_1.default.sign(payload, SECRET, {
            expiresIn: time
        });
        return token;
    }
}
exports.JWT = JWT;
