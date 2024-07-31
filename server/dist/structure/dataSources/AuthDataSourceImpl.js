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
exports.AuthDatasourceImpl = void 0;
const Bcrypt_1 = require("../../config/Bcrypt");
const User_1 = require("../../database/models/User");
const entities_1 = require("../../domain/entities");
class AuthDatasourceImpl {
    register(registerUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, email } = registerUserDto;
                console.log(registerUserDto);
                const isEmail = yield User_1.User.findOne({ email });
                console.log(isEmail);
                if (isEmail)
                    throw new Error("este correo ya existe");
                console.log("as", password);
                const hashPassword = yield Bcrypt_1.PasswordHash.hashPassword(password);
                registerUserDto.password = hashPassword;
                const user = yield User_1.User.create(registerUserDto);
                console.log(user);
                return entities_1.UserEntity.mapper(user);
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    login(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("ssssss");
                const { email, password } = loginUserDto;
                const user = yield User_1.User.findOne({ email });
                console.log(password);
                if (!user)
                    throw new Error("este correo no esta registrado");
                const isPassword = yield Bcrypt_1.PasswordHash.comparePassword(password, user.password);
                console.log("eeeeee", isPassword);
                if (!isPassword)
                    throw new Error("Contraseña invalida");
                return entities_1.UserEntity.mapper(user);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.AuthDatasourceImpl = AuthDatasourceImpl;
