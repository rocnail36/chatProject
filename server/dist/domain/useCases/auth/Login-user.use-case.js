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
exports.LoginUser = void 0;
const jwt_1 = require("../../../config/jwt");
class LoginUser {
    constructor(authRepository, signToken = jwt_1.JWT.signToken) {
        this.authRepository = authRepository;
        this.signToken = signToken;
    }
    execute(registerDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authRepository.login(registerDto);
            const token = this.signToken(Object.assign({}, user), "5h");
            return {
                user: Object.assign(Object.assign({}, user), { token })
            };
        });
    }
}
exports.LoginUser = LoginUser;